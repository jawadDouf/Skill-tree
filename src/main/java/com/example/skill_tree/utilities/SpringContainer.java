package com.example.skill_tree.utilities;

import com.example.skill_tree.model.Student;
import com.example.skill_tree.services.Student_service;
import com.example.skill_tree.spring_config.JpaConfiguration;
import com.example.skill_tree.spring_config.SpringConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringContainer {

    public static ApplicationContext applicationContext;

    public static ApplicationContext getContainer(){
        if(applicationContext != null){
            return applicationContext;
        }else {
            return new AnnotationConfigApplicationContext(JpaConfiguration.class);
        }
    }
}
