import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../../Authservice/authservice.service';

@Component({
  selector: 'app-feedback',
  imports: [NgFor],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent  implements OnInit{

  feedback: any[] = [];

  constructor(private feedbackService: AuthserviceService) {}

  ngOnInit(): void {
    this.loadEmployees(); 
  }

  // Load all employees
  loadEmployees(): void {
    this.feedbackService.getFeedback().subscribe(
      (data) => {
        this.feedback = data;
      },
      (error) => {
        console.error('Error loading Feedback:', error);
      }
    );
  }

  // Delete a contact
  deleteFeedback(id: number): void {
    if (confirm('Are you sure you want to delete')) {
      this.feedbackService.deleteFeedback(id).subscribe(
        () => {
          this.loadEmployees();  
        },
        (error) => {
          console.error('Error deleting Feedback:', error);
        }
      );
    }
  }

}
