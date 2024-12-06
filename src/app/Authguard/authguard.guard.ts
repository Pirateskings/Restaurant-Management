import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from '../Authservice/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class authguardGuard implements CanActivate {
  constructor(private authService: AuthserviceService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole'); // Save role during login
  
    if (token && userRole === 'Admin') {
      return true;
    } else if (token && userRole === 'User') {
      return true;
    }
  
    this.router.navigate(['/login']); // Redirect if not authorized
    return false
}
}
