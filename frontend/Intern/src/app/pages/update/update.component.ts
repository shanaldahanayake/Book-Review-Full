import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

const currentDate = new Date();
const formattedDate = currentDate.getFullYear() + '-' +
  String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
  String(currentDate.getDate()).padStart(2, '0');


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  public reviewData:any;
  public updatingObject={
    id:'',
    name:'',
    author:'',
    rating:'',
    review:'',
    localDate:''
  }  
  
  

  constructor(private service:BookService,private router:Router) {}

  ngOnInit() {
    
    this.reviewData = this.service.getReviewData();

    this.service.clearReviewData();

    console.log(this.reviewData); 

    this.setToUpdate();
  }

  setToUpdate(){
    this.updatingObject.id=this.reviewData.id;
    this.updatingObject.name=this.reviewData.name;
    this.updatingObject.author=this.reviewData.author;
    this.updatingObject.rating=this.reviewData.rating;
    this.updatingObject.review=this.reviewData.review;
    this.updatingObject.id=this.reviewData.id;
    this.updatingObject.localDate=formattedDate;
  }

  updateReview(){
    this.service.updateBookReview(this.updatingObject).subscribe(
      res => {
        Swal.fire({
          title: "Good job!",
          text: "Your update Successful!",
          icon: "success"
        });
          this.router.navigateByUrl("home/all");
      },
      err => {
        Swal.fire({
          title: "Oops!",
          text: "Something went Wrong!",
          icon: "error"
        });
      }
  );
  }

}
