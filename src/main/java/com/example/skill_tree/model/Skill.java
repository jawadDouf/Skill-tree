package com.example.skill_tree.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "skills")
public class Skill implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name",columnDefinition="varchar(255) default 'skill'")
    private String name;


    @OneToMany(mappedBy = "skill")
    private List<Student_Skill> students;

    @OneToMany(mappedBy = "skill")
    private List<Skill_Technologie> technologies;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Student_Skill> getStudents() {
        return students;
    }

    public void setStudents(List<Student_Skill> students) {
        this.students = students;
    }

    public List<Skill_Technologie> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(List<Skill_Technologie> technologies) {
        this.technologies = technologies;
    }


}
