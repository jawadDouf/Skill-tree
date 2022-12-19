package com.example.skill_tree.repositories;

import com.example.skill_tree.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public interface Student_repo extends JpaRepository<Student, Integer> {


}
