package org.example.service;

import org.example.model.Book;

import java.util.List;

public interface BookService {
    boolean addBook(Book book);

    List<Book> getAll();

    List<Book> searchBookByName(String name);

    boolean updateBook(Book book);

    boolean deleteBook(Integer id);
}
