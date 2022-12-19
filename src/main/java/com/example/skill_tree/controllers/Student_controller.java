package com.example.skill_tree.controllers;

import com.example.skill_tree.services.Student_service;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Student_controller {

    @Autowired
    private Student_service student_service;


    @RequestMapping("/addStudent")
    public ModelAndView addingStudent(HttpServletRequest request, HttpServletResponse response){
      ModelAndView mv = new ModelAndView();
      student_service.addOneStudent(request.getParameter("f_name"),request.getParameter("l_name"),request.getParameter("email"),request.getParameter("password"));
      mv.setViewName("index");
      return mv;
    }

    @RequestMapping("/deleteStudent")
    public ModelAndView deleteStudent(@RequestParam("id") int id){
        //
        student_service.deleteOneStudent(id);
        //redirect
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        return mv;
    }




}
