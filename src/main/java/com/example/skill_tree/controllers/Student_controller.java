package com.example.skill_tree.controllers;

import com.example.skill_tree.services.Student_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class Student_controller {

    @Autowired
    private Student_service student_service;


}
