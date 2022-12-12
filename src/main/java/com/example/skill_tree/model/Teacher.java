package com.example.skill_tree.model;


import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "teachers")
public class Teacher extends Person{


    @OneToMany(mappedBy = "teacher",fetch = FetchType.EAGER)
    private List<Student> students;



    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }
}
