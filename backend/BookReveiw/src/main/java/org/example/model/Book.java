package org.example.model;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Book {
    private Integer id;
    private String name;
    private String author;
    private Double rating;
    private String review;
    private LocalDate localDate;
}
