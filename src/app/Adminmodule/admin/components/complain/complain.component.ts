import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../../Authservice/authservice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-complain',
  imports: [NgFor],
  templateUrl: './complain.component.html',
  styleUrl: './complain.component.css'
})
export class ComplainComponent  implements OnInit {

  complaints: any[] = [];

  constructor(private complaintservice : AuthserviceService) {}

  ngOnInit(): void {
    this.loadComplaint(); 
  }

  
  loadComplaint(): void {
    this.complaintservice.getComplaint().subscribe(
      (data) => {
        this.complaints = data;
      },
      (error) => {
        console.error('Error loading Complaint:', error);
      }
    );
  }

  // Delete a Conmplaint
  deleteComplaint(id: number): void {
    if (confirm('Are you sure you want to delete?')) {
      this.complaintservice.deleteComplaint(id).subscribe(
        () => {
          this.loadComplaint();  
        },
        (error) => {
          console.error('Error deleting Complaint:', error);
        }
      );
    }
  }
}
