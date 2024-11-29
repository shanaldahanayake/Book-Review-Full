import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllReviewsComponent } from "./pages/all-reviews/all-reviews.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Intern';
  ngOnInit(): void {
    initFlowbite();
  }
}
