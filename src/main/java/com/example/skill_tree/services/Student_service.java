package com.example.skill_tree.services;


import com.example.skill_tree.model.Student;
import com.example.skill_tree.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class Student_service {

    @Autowired
    private Student_repo student_repo;




    public void addOneStudent(String f_name,String l_name,String email,String password){
        Student student = new Student();
        student.setF_name(f_name);
        student.setL_name(l_name);
        student.setEmail(email);
        student.setPassword(password);
        student_repo.save(student);
    }

    public Student getOneStudent(int id){
        return student_repo.findById(id).get();
    }

    public void deleteOneStudent(int id){
        student_repo.deleteById(id);
    }





}
