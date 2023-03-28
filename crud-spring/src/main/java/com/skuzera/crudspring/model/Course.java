package com.skuzera.crudspring.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Course {


    @Id
    @JsonProperty("_id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable=false)
    private String name;

    @Column(length = 10, nullable=false)
    private String category;


    
    
}
