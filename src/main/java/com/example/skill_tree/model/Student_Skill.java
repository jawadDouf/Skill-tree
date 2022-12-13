package com.example.skill_tree.model;

import com.example.skill_tree.model.embeddable_classes.Student_SkillId;
import com.example.skill_tree.model.enums.Validation;
import jakarta.persistence.*;

import java.io.Serializable;


@Entity
@Table(name = "students_skills")
public class Student_Skill implements Serializable {

    @EmbeddedId
    private Student_SkillId id;

    @ManyToOne
    @MapsId("student_id")
    private Student student;

    @ManyToOne
    @MapsId("skill_id")
    private Skill skill;



    @Enumerated(EnumType.ORDINAL)
    @Column(name = "level1_status",nullable = false)
    private Validation level1;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "level2_status",nullable = false)
    private Validation level2;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "level3_status",nullable = false)
    private Validation level3;






    public Validation getLevel1() {
        return level1;
    }

    public void setLevel1(Validation level1) {
        this.level1 = level1;
    }

    public Validation getLevel2() {
        return level2;
    }

    public void setLevel2(Validation level2) {
        this.level2 = level2;
    }

    public Validation getLevel3() {
        return level3;
    }

    public void setLevel3(Validation level3) {
        this.level3 = level3;
    }

    public Student_SkillId getId() {
        return id;
    }

    public void setId(Student_SkillId id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }




}
