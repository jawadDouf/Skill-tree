package com.example.skill_tree.model;


import jakarta.persistence.*;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.List;

@Entity
@Table(name = "students")
public class Student extends Person{


    @ManyToOne
    @JoinColumn(name = "teacher_id",referencedColumnName = "id")
    private Teacher teacher;


    @OneToMany(mappedBy = "student")
    private List<Student_Skill> skills;



    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public List<Student_Skill> getSkills() {
        return skills;
    }

    public void setSkills(List<Student_Skill> skills) {
        this.skills = skills;
    }


}
