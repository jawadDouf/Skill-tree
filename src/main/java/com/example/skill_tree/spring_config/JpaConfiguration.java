package com.example.skill_tree.spring_config;


import jakarta.persistence.EntityManagerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotatedBeanDefinitionReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;


@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.example.skill_tree.repositories")
public class JpaConfiguration {

    @Bean(name = "entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(){
         LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean(); // Creats the EntityManagerFactiry
         em.setDataSource(dataSource());
         em.setPackagesToScan("com.example.skill_tree.model");

         JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
         em.setJpaVendorAdapter(vendorAdapter);

         //Add new jpa properties
        Properties jpaProperties = new Properties();
        jpaProperties.setProperty("hibernate.hbm2ddl.auto","update");
        jpaProperties.setProperty("hibernate.show_sql","true");
        em.setJpaProperties(jpaProperties);
         return em;
     }

    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("jdbc:postgresql://localhost:5432/skilltree");
        dataSource.setUsername("postgres");
        dataSource.setPassword("J@1ssword!");
        return dataSource;
    }

    @Bean
    public PlatformTransactionManager transactionManager() {

        JpaTransactionManager transactionManager = new JpaTransactionManager();

        transactionManager.setEntityManagerFactory(entityManagerFactoryBean().getObject());

        return transactionManager;
    }

}
