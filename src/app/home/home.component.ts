import { NgFor, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthserviceService } from '../Authservice/authservice.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private auth =inject(AuthserviceService);
   private username =  this.auth.getToken();


  constructor(private router: Router,) {
      
  }
 
  navigate(path: string): void {
    if (this.username === 'admin') {
      this.router.navigate([`/admin/${path}`]);
    } else {
      this.router.navigate([`/user/${path}`]);
    }
  }

}
