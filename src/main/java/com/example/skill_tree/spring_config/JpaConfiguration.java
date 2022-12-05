package com.example.skill_tree.spring_config;


import jakarta.persistence.EntityManagerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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
public class JpaConfiguration {


    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(){
         LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean(); // Creats the EntityManagerFactiry
         em.setDataSource(dataSource());
         em.setPackagesToScan(new String[]{"com.example.skill_tree.model"});

         JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
         em.setJpaVendorAdapter(vendorAdapter);

         //Add new jpa properties
        Properties jpaProperties = new Properties();

        jpaProperties.setProperty("hibernate.hbm2ddl.auto", "create-drop");
        jpaProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");

        em.setJpaProperties(jpaProperties);



         return em;
     }

    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/");
        dataSource.setUsername("root");
        dataSource.setPassword("password");
        return dataSource;
    }

    @Bean
    public PlatformTransactionManager transactionManager() {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean().getObject());
        return transactionManager;
    }




}
