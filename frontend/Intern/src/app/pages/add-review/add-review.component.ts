import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

const currentDate = new Date();
const formattedDate = currentDate.getFullYear() + '-' +
  String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
  String(currentDate.getDate()).padStart(2, '0');

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {
  constructor(private service: BookService,private router:Router) { }

  public bookReview = {
    name: '',
    author: '',
    rating: 0.0,
    review: '',
    localDate: formattedDate
  }

  addBookReview() {
    if (this.bookReview.rating > 0 && this.bookReview.rating <= 5) {
      this.service.addBookReview(this.bookReview).subscribe({
        next: res => {
          Swal.fire({
            title: "Good job!",
            text: "Your posting Successful!",
            icon: "success"
          });
          this.router.navigateByUrl("home/all");

        },
        error: err => {
          Swal.fire({
            title: "Oops!",
            text: "Something Went Wrong!",
            icon: "error"
          });

        }
      });
    } else {
      Swal.fire({
        title: "Check Again",
        text: "Ratings should be 0-5..",
        icon: "error"
      });
    }

  }

}
