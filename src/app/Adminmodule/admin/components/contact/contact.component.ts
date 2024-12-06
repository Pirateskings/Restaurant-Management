import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../../Authservice/authservice.service';

@Component({
  selector: 'app-contact',
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contact: any[] = [];

  constructor(private contactService: AuthserviceService) {}

  ngOnInit(): void {
    this.loadEmployees(); 
  }

  // Load all employees
  loadEmployees(): void {
    this.contactService.getContact().subscribe(
      (data) => {
        this.contact = data;
      },
      (error) => {
        console.error('Error loading contacts:', error);
      }
    );
  }

  // Delete a contact
  deleteContact(id: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(id).subscribe(
        () => {
          this.loadEmployees();  
        },
        (error) => {
          console.error('Error deleting contact:', error);
        }
      );
    }
  }
}
