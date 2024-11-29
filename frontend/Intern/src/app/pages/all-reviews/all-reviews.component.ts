import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-all-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-reviews.component.html',
  styleUrl: './all-reviews.component.css'
})
export class AllReviewsComponent {

  public reviews:any=[];
  public review:any;
  constructor(private service:BookService,private router: Router){}

  ngOnInit(){
    this.loadAllBookReviews();
  }

  loadAllBookReviews(){
    this.reviews.length=0;
      this.service.getAllBookReviews().subscribe({
        next:res=>{
          res.forEach((element:any)=>{
            this.reviews.push(element);
          })
        },
        error:error=>{
        }
      })
  }
  navigate(rev:any) {
    this.service.setReviewData(rev);
    this.router.navigate(['home/update']);
  }
  deleteReview(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteBookReview(id).subscribe({
          next:res=>{
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }); 
            this.loadAllBookReviews();
          },
          error:err=>{
            swalWithBootstrapButtons.fire({
              title: "Not Deleted!",
              text: "Something Went Wrong",
              icon: "error"
            });
          }
        }) 
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your data is safe :)",
          icon: "error"
        });
      }
    });
  }
  getRatingStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 >= 0.5; 

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('full');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }

    return stars;
  }
}
