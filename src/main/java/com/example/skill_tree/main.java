package com.example.skill_tree;

import com.example.skill_tree.model.Teacher;
import com.example.skill_tree.spring_config.JpaConfiguration;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class main {
    public static void main(String[] args) {

        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(JpaConfiguration.class);
        EntityManagerFactory entityManagerFactory = (EntityManagerFactory) applicationContext.getBean("entityManagerFactory");
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        Teacher teacher = new Teacher();
        teacher.setF_name("a");
        teacher.setL_name("b");
        teacher.setEmail("ad@gmail.com");
        teacher.setPassword("12345678");
        entityManager.persist(teacher);
        entityManager.getTransaction().commit();

    }
}
