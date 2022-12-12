package com.example.skill_tree.model.embeddable_classes;

import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class Skill_TechnologieId implements Serializable {

    private int skill_id;

    private int technologie_id;

}
