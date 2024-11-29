package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.model.Book;
import org.example.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/book-review")
@RequiredArgsConstructor
public class BookController {

    private final BookService service;

    @PostMapping("/add")
    public ResponseEntity<Book> addBookReview(@RequestBody Book book){
        boolean success=service.addBook(book);
        System.out.println(book);
        if(success){
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @GetMapping("/get-all")
    public ResponseEntity<?> getAllBookReviews(){
        List<Book> all = service.getAll();
        if(all!=null){
            return ResponseEntity.ok(all);
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @GetMapping("/get-by-name")
    public ResponseEntity<List<Book>> getBookReview(@RequestParam String name){
        System.out.println(name);
        List<Book> searchBookByName=service.searchBookByName(name);
        System.out.println(searchBookByName);

        if(searchBookByName==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(searchBookByName);
    }

    @PutMapping("/update")
    public ResponseEntity<Book> updateBookReview(@RequestBody Book book){
        System.out.println(book);
        boolean success=service.updateBook(book);
        if(success){
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Book> deleteBookReview(@PathVariable Integer id){
        boolean success=service.deleteBook(id);
        if(success){
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
