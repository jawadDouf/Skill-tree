package com.example.skill_tree.services;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class testConfig {

    @RequestMapping("/sendReq")
    public ModelAndView redirectToIndexPag(){
        System.out.println("I'm working");
        ModelAndView mv = new ModelAndView();
        mv.setViewName("index");
        return mv;
    }
}
