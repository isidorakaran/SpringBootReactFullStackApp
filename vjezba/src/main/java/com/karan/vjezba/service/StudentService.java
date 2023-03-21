package com.karan.vjezba.service;


import com.karan.vjezba.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();



}
