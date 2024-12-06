import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl ="http://localhost:8080/api/"
  constructor(private router :Router,private http:HttpClient) { }

  setToken(token : string):void{
    localStorage.setItem('token',token);
  }

  getToken() :string | null{
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; 
  }

  logout(): void {
    localStorage.removeItem('authToken');
    window.location.href='/login';
  }

   // Get list of users
   getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}userdata`);
  }

  // Add a new user
  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}adduser`, user);
  }

  // Update an existing user
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}`, user);
  }

  // Delete a user by ID
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}`);
  }




  getEmployees(sortOrder: string = 'asc'): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}getemployee?sort=id&order=${sortOrder}`);
  }
  
  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}addemployee`, employee);
  }

  updateEmployee(employee: any,id:number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}update/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}delete/${id}`);
  }



  //Reservations


  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}bookall`);
  }

  addReservation(reservation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}add`, reservation);
  }

  updateReservation(reservation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}bookupdate/${reservation.id}`, reservation);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}bookdelete/${id}`);
  }

  //contact
  getContact(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}contactall`);
  }
  deleteContact(id:number): Observable<any>
{
  return this.http.delete(`${this.apiUrl}contactdelete/${id}`);
} 

//Complaint
getComplaint(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}complaintall`);
}
deleteComplaint(id:number): Observable<any>
{
return this.http.delete(`${this.apiUrl}complaintdelete/${id}`);
} 

//Newsletter
getNewsletter(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}newsletterall`);
}
deleteNewsletter(id:number): Observable<any>
{
return this.http.delete(`${this.apiUrl}newsletterdelete/${id}`);
} 

//Feedback
getFeedback(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}feedbackall`);
}
deleteFeedback(id:number): Observable<any>
{
return this.http.delete(`${this.apiUrl}feedbackdelete/${id}`);
} 
}
  