package com.example.skill_tree.model;


import jakarta.persistence.*;

import java.io.Serializable;

@MappedSuperclass
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id",unique = true,nullable = false)
    private int id;


    @Column(name = "first_name",columnDefinition = "varchar(50)",nullable = false)
    private String f_name;

    @Column(name = "last_name",columnDefinition = "varchar(50)",nullable = false)
    private String l_name;

    @Column(name = "email",columnDefinition = "varchar(150)",nullable = false,unique = true)
    private String email;

    @Column(name = "password",columnDefinition = "varchar(150)",nullable = false,unique = true)
    private String password;


    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
