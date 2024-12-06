import { NgFor, NgForOf } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-service',
  imports: [FormsModule,RouterLink,NgForOf],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent  implements OnInit {
  constructor(private router: Router, private http: HttpClient) {} 

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.routerState.snapshot.root.fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
  }

  content=[
    {
    image:"https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/06/10/9f399a5b7c544417a3e7cf1085441b0e_Michael+Anthony%2C+Executive+Chef_Credit+Liz+Clayman_1.jpg",
    name:"Chef John Smith",
    destination:"Head Chef",
    ref:"Chef John Smith brings over 9 years of culinary experience. With a passion for Italic Style and a commitment to using fresh, local ingredients."
  },
  {
    image:"https://www.fabfoodchicago.com/wp-content/uploads/2016/02/Sean-7519-823x1024.jpg",
    name:"Chef Jane Doe",
    destination:"Pastry Chef",
    ref:" Crafted a wide variety of pastries, desserts, and breads, focusing on seasonal ingredients and innovative flavor combinations.",
  },
  {
    image:"https://th.bing.com/th/id/OIP.LotkR6EGey0JRYcm1AHizwHaJ4?rs=1&pid=ImgDetMain",
    name:"Chef Mike Brown",
    destination:"Sous Chef",
    ref:" Mike Brown is the right hand of our Head Chef, specializing in Indian Thali and Soups. With a keen eye for detail and a love for Indian cuisine.",
  },{
    image:"https://i.pinimg.com/originals/db/71/c6/db71c6fcdd9807c93b57229965af32df.jpg",
    name:"Chef Sarah Lee",
    destination:"Line Cook",
    ref :" As a vital part of our kitchen team, Sarah Lee works tirelessly to prepare and cook dishes to perfection. With a focus on Japanese cuisine.",
  }

]

  page = {
    name: "",
    email: "",
    number: "",
    event: "",
    date: "",
    address: ""
  };

  test = {
    name: "",
    email: "",
    review: "",
    rating: ""
  };

  resetForm(){
    this.page = {
      name: "",
      email: "",
      number: "",
      event: "",
      date: "",
      address: ""
    };
  
   this.test = {
      name: "",
      email: "",
      review: "",
      rating: ""
    };
  }
  onSubmit() {
    if (!this.page.name || !this.page.email || !this.page.number) {
      alert("Please, fill out all required fields.");
      return;
    }
    this.http.post("http://localhost:8080/api/book", this.page).subscribe({
      next: (response: any) => {
        console.log("Booking Success:", response);
        alert("Successfully Booked");
        this.resetForm();
        return;
              },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        alert("Unexpected Error Occurred");
      }
    });
  }

  onTestimonials() {
    if (!this.test.name || !this.test.email || !this.test.review) {
      alert("Please, fill out all required fields.");
      return;
    }
    this.http.post("http://localhost:8080/api/testimonials", this.test).subscribe({
      next: (response: any) => {
        console.log("Testimonial Success:", response);
        alert("Thank You for Feedback");
        this.resetForm();
        return;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        alert("Unexpected Error Occurred");
      }
    });
  }
}

