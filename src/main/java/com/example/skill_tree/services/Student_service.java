package com.example.skill_tree.services;


import com.example.skill_tree.model.Student;
import com.example.skill_tree.repositories.Student_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class Student_service {

    @Autowired
    private Student_repo student_repo;

    public void addOneStudent(Student student){

        student_repo.save(student);
    }



}
