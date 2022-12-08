package com.example.skill_tree.model.embeddable_classes;


import com.example.skill_tree.model.Skill;
import com.example.skill_tree.model.Student;
import jakarta.persistence.Embeddable;
import jakarta.persistence.ManyToOne;

import java.io.Serializable;

@Embeddable
public class Student_SkillId implements Serializable {



    private int student_id;


    private int skill_id;


}
