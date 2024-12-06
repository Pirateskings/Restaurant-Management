import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private http:HttpClient,private router:Router){}
contact={
    name:"",
    email:"",
    phone:"",
    subject:"",
    date:"",
    suggestion:"",
  };
  complaint ={
    name:'',
    email:'',
    message:'',
    priority:'',

    date:'',
  }
  resetForm(){
    this.contact={
      name:"",
      email:"",
      phone:"",
      subject:"",
      date:"",
      suggestion:"",
    };
    this.complaint ={
      name:'',
      email:'',
      message:'',
      priority:'',
      date:'',
    }
  }


  onSubmitComplaint(){
    if(!this.complaint.name || !this.complaint.email || !this.complaint.message || !this.complaint.priority){
      alert("Please , Fill the Form");
      return;
    }
    this.http.post("http://localhost:8080/api/complaint",this.complaint).subscribe({
      next:(response:any)=>{
        console.log(response);
         alert("Submitted Successfully");
         this.resetForm();
         window.location.reload();

         return;
      },
      error:(error:HttpErrorResponse)=>{
          console.error(error);
          alert("Unexcepted error occurs");
          return;
      }
    });

  }
  
  Oncontact(){
     if(!this.contact.name || !this.contact.email || !this.contact.phone || !this.contact.date || !this.contact.subject ||!this.contact.suggestion){
      alert("Please,Fill the Missing Field");
      return;
     }  
     this.http.post("http://localhost:8080/api/contact", this.contact).subscribe({
      next:(response:any)=>{
        console.log("Response",response);
        alert("Thankyou for Submit");
        this.resetForm();
        return;
      },
       error:(error:HttpErrorResponse)=>{
        console.error("error",error);
        alert("Unexceptrd error occurs");
      }
    });
  }
}
