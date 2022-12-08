package com.example.skill_tree.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
public class Technologie implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name",nullable = false,unique = true)
    private String name;

    @OneToMany(mappedBy = "skill")
    List<Skill_Technologie> skill;



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
}
