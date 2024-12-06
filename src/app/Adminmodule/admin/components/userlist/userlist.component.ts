import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../../Authservice/authservice.service';
import { FormsModule } from '@angular/forms';
declare  var bootstrap :any;

@Component({
  selector: 'app-userlist',
  imports: [NgFor,FormsModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements  OnInit {

  userdata: any[] = [];
  newUser: any = {};

  constructor(private userService: AuthserviceService) {}

  ngOnInit(): void {
    this.loadUsers();
    
  }

  // Open Add User Modal
  openAddUserModal(): void {
    this.newUser = {}; 
    const addUserModal = new bootstrap.Modal(document.getElementById('addUserModal') as HTMLElement);
    addUserModal.show();
  }

  // Open Update Modal with user data
  openUpdateModal(user: any): void {
    this.newUser = { ...user }; 
    const addUserModal = new bootstrap.Modal(document.getElementById('addUserModal') as HTMLElement);
    addUserModal.show();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.userdata = users;
      },
      (error) => {
        console.error('Error loading users:', error);
        alert('Failed to load users. Please try again later.');
      }
    );
  }
  
  addUser(): void {
    this.userService.addUser(this.newUser).subscribe(
      (response) => {
        console.log(response);
        alert('User added successfully');
        this.loadUsers();
      },
      (error) => {
        console.error('Error adding user:', error);
        alert('Error adding user. Please try again later.');
      }
    );
  }
  
  updateUser(id: number): void {
    this.userService.updateUser(id, this.newUser).subscribe(
      (response) => {
        console.log(response);
        alert('User updated successfully');
        this.loadUsers();
      },
      (error) => {
        console.error('Error updating user:', error);
        alert('Error updating user. Please try again later.');
      }
    );
  }
  
  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(
        (response) => {
          console.log(response);
          alert('User deleted successfully');
          this.loadUsers();
        },
        (error) => {
          console.error('Error deleting user:', error);
          alert('Error deleting user. Please try again later.');
        }
      );
    }
  }
  

   // Close the modal
   closeModal(): void {
    const addUserModal = new bootstrap.Modal(document.getElementById('addUserModal') as HTMLElement);
    addUserModal.hide();
  }
}

