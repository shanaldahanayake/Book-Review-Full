import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url="http://localhost:8081";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  private review: any;

  setReviewData(data: any) {
    this.review = data;
  }

  public getReviewData() {
    return this.review;
  }

  clearReviewData() {
    this.review = null;
  }

  getAllBookReviews():Observable<any>{
    return this.http.get(`${url}/book-review/get-all`);
  }

  updateBookReview(data:any):Observable<any>{
    return this.http.put(`${url}/book-review/update`,data);
  }

  addBookReview(data:any):Observable<any>{
    return this.http.post(`${url}/book-review/add`,data);
  }
  deleteBookReview(id:number):Observable<any>{
    return this.http.delete(`${url}/book-review/delete/${id}`);
  }
  searchByBookName(name:string):Observable<any>{
    return this.http.get(`${url}/book-review/get-by-name?name=${name}`);
  }
}
