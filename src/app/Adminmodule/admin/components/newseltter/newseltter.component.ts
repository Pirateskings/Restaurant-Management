import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../../Authservice/authservice.service';

@Component({
  selector: 'app-newseltter',
  imports: [NgFor],
  templateUrl: './newseltter.component.html',
  styleUrl: './newseltter.component.css'
})
export class NewseltterComponent implements OnInit {

  newsletter: any[] = [];

  constructor(private Newsletterservice : AuthserviceService) {}

  ngOnInit(): void {
    this.loadNewsletter(); 
  }

  
  loadNewsletter(): void {
    this.Newsletterservice.getNewsletter().subscribe(
      (data) => {
        this.newsletter = data;
      },
      (error) => {
        console.error('Error loading Newsletter:', error);
      }
    );
  }

  // Delete
  deleteNewsletter(id: number): void {
    if (confirm('Are you sure you want?')) {
      this.Newsletterservice.deleteNewsletter(id).subscribe(
        () => {
          this.loadNewsletter();  
        },
        (error) => {
          console.error('Error deleting NewSletter:', error);
        }
      );
    }
  }

}
