package com.example.skill_tree;

import com.example.skill_tree.model.Teacher;
import com.example.skill_tree.services.Student_service;
import com.example.skill_tree.spring_config.JpaConfiguration;
import com.example.skill_tree.utilities.SpringContainer;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class main {
    public static void main(String[] args) {

        ApplicationContext context = SpringContainer.getContainer();


        System.out.println(context);

    }
}
