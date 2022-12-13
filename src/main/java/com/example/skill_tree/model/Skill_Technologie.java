package com.example.skill_tree.model;

import com.example.skill_tree.model.embeddable_classes.Skill_TechnologieId;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

import java.io.Serializable;



@Entity
public class Skill_Technologie implements Serializable {

    @EmbeddedId
    private Skill_TechnologieId id;

    @ManyToOne
    @MapsId("skill_id")
    private Skill skill;

    @ManyToOne
    @MapsId("technologie_id")
    private Technologie technologie;

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

    public Technologie getTechnologie() {
        return technologie;
    }

    public void setTechnologie(Technologie technologie) {
        this.technologie = technologie;
    }

    public Skill_TechnologieId getId() {
        return id;
    }

    public void setId(Skill_TechnologieId id) {
        this.id = id;
    }
}
