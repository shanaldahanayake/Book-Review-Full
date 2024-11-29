import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-review',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-review.component.html',
  styleUrl: './search-review.component.css'
})
export class SearchReviewComponent {
  public bookName: any;
  public filteredReviews: any = [];
  public listState:boolean=true;
  constructor(private service: BookService) { }

  search() {
    this.filteredReviews.length = 0;
    this.service.searchByBookName(this.bookName).subscribe({
      next: res => {
        res.forEach((element: any) => {
          this.filteredReviews.push(element);
        })
        console.log(res);

      },
      error: err => {
        console.log(err);
        
      }
    })
  }

  searchReview(rev: KeyboardEvent) {
    this.listState=true;
    this.filteredReviews.length = 0;
    if (rev) {
      const element = rev.target as HTMLInputElement;
      if(element.value!=""){
        this.service.searchByBookName(element.value).subscribe({
          next: res => {
            res.forEach((element: any) => {
              this.filteredReviews.push(element);
            })
            console.log(res);
  
          },
          error: err => {
            console.log(err);
            
          }
        })
      }
    }
  }
  selectBook(name:string){
    this.bookName=name;
    this.search();
    this.showList();
  }

  showList(){
    this.listState=false;
  }

}
