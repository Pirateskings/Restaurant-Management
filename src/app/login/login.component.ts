import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';
import { AuthserviceService } from '../Authservice/authservice.service';
declare  var bootstrap :any;

@Component({
  selector: 'app-login',
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router :Router,private authservice:AuthserviceService) {}

  isFormSubmitted: boolean = false;
  ngOnInit(): void {

    

    this.route.fragment.subscribe(fragment => {
      if (fragment === 'register') {
        this.openRegisterModal();
      }
    });
  
    if (this.authservice.isLoggedIn()) {
      if (this.login.username === 'Admin') {
        this.router.navigateByUrl('/admin/admin-dashboard');
      } else {
        this.router.navigateByUrl('/user/home');
      }
    }
}
  

  openRegisterModal() {
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal') as HTMLElement);
    registerModal.show();
  }

  //Validation for login
  private http = inject(HttpClient);

  login={
    username:'',
    email:'',
    password:'',
    status:'',
  }

  register={
    name:'',
    email:'',
    address:'',
    confirmpass:'',
    zipcode:'',
    password:'',
    date:'',
    phone:'',
    username:'',
  }

  resetform(){
    
  this.login={
    username:'',
    email:'',
    password:'',
    status:'',
  }

  this.register={
    name:'',
    email:'',
    address:'',
    confirmpass:'',
    zipcode:'',
    password:'',
    date:'',
    phone:'',
    username:'',
  }
  }
  onLogin(): void {
    if (!this.login.username || !this.login.password) {
      alert('Please fill in all fields');
      return;
    }
  
    const loginRequest = {
      username: this.login.username,
      password: this.login.password,
      email: this.login.email
    };
  
    if (this.login.username === "Admin") {
      this.http.post("http://localhost:8080/api/adminlogin", loginRequest, { responseType: "text" }).subscribe({
        next: (response: string) => {
          if(response === "Admin login successful"){
           localStorage.setItem('authToken', response);
  localStorage.setItem('userRole', 'Admin');
          console.log(response);
          alert("Admin login successful");       
          setTimeout(() => {
            window.location.href='/admin/admin-dashboard';
          }, 1000); 
        }},
        error: (error: HttpErrorResponse) => {
          console.error(error);
          alert(error.error || "Unexpected error 500!");
        }
      });
    } else {
      this.http.post("http://localhost:8080/api/login", loginRequest,{responseType:'text'}).subscribe({
        next: (response: any) => {
          console.log(response);
         
  localStorage.setItem('authToken', response.token);
  localStorage.setItem('userRole', 'User');
          alert("User login successful");
          window.location.href='/user/home';
          this.resetform();
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
          alert(error.error || "Unexpected error 500!");
        }
      });
    }
  }
  
  
  onregister() :void{

    if( this.register.password !== this.register.confirmpass){
      alert("Password Doesn't Match");
      return;
    }

    this.http.post("http://localhost:8080/api/register",this.register).subscribe({
      next:(response:any)=>{
        console.log(response);
        alert("Thank you for Registration");
        this.router.navigateByUrl('/login');
        this.resetform();
        return;
      },
      error:(error:HttpErrorResponse)=>{
        console.error(error);
        alert("Unexcepted error 500!!")
      }
    })
  }
    forgot={
      email:'',
           username:'',
    }

  onForgotPassword() {
    if (!this.forgot.email) {
      alert('Please enter a valid email address.');
      return;
    }

     ;

    this.http.post(`http://localhost:8080/api/resetpass/${this.forgot.username}/${this.forgot.email}`, this.forgot).subscribe({
     next: (response: any) => {
      console.log(response);
        alert('Password reset link has been sent to your email.');
        this.forgot.email = ''; ``
      },
      error:(error:HttpErrorResponse) => {
        console.error('Error:', error);
        alert('An error occurred while sending the reset link. Please try again.');
      }
  });
  }

}
