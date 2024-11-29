package org.example.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.entity.BookEntity;
import org.example.model.Book;
import org.example.repository.BookRepository;
import org.example.service.BookService;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookServiceImpl implements BookService {
    final BookRepository bookRepository;
    final ObjectMapper mapper;

    @Override
    public boolean addBook(Book book) {
        try {
            bookRepository.save(mapper.convertValue(book, BookEntity.class));
            return true;
        }catch (Exception e){
            log.error(e.toString());
            return false;
        }
    }

    @Override
    public List<Book> getAll() {
            List<Book> bookList=new LinkedList<>();

            for (BookEntity bookEntity : bookRepository.findAll()) {
                bookList.add(mapper.convertValue(bookEntity, Book.class));
            }
            return bookList;
    }

    @Override
    public List<Book> searchBookByName(String name) {
        List<Book> bookList=new LinkedList<>();

        for (BookEntity bookEntity : bookRepository.findByNameContainingIgnoreCase(name)) {
            bookList.add(mapper.convertValue(bookEntity, Book.class));
        }
        return bookList;
    }

    @Override
    public boolean updateBook(Book book) {
        try {
            BookEntity entity = bookRepository.findById(book.getId()).orElseThrow();
            entity.setAuthor(book.getAuthor());
            entity.setName(book.getName());
            entity.setReview(book.getReview());
            entity.setRating(book.getRating());
            entity.setLocalDate(book.getLocalDate());
            bookRepository.save(entity);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public boolean deleteBook(Integer id) {
        try{
            bookRepository.deleteById(id);
            return true;
        }catch(Exception e){
            return false;
        }
    }
}
