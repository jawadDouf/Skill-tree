package com.example.skill_tree.spring_config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ModelAndView;;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan(basePackages = {"com.example.skill_tree"})
public class SpringConfiguration {

    @Bean
    public InternalResourceViewResolver viewResolver(){
        InternalResourceViewResolver vr = new InternalResourceViewResolver();

        vr.setSuffix(".jsp");

        return vr;
    }

    @Bean
    public ModelAndView v(){
        ModelAndView mav = new ModelAndView();

        return mav;
    }



}
