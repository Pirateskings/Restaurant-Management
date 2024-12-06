import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../../../../Authservice/authservice.service';

@Component({
  selector: 'app-reservations',
  imports: [FormsModule,NgFor,NgIf,NgClass],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent  implements OnInit {
  reservations: any[] = [];
  bookingForm: any = {};
  currentBooking: any = null;
  isModalOpen = false;

  constructor(private reservationService: AuthserviceService) {}

  ngOnInit(): void {
    this.getReservations();
  }

  // Fetch reservations
  getReservations(): void {
    this.reservationService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

  // Open Modal for Add or Edit
  openReservationModal(booking?: any): void {
    this.currentBooking = booking || null;
    this.bookingForm = booking ? { ...booking } : {};
    this.isModalOpen = true;
    this.toggleBodyClass(true); 
  }

 
  closeModal(): void {
    this.isModalOpen = false;
    this.bookingForm = {};
    this.toggleBodyClass(false);
  }
  saveReservation(): void {
    if (this.currentBooking) {
      this.reservationService.updateReservation(this.bookingForm).subscribe(() => {
        this.getReservations();
        this.closeModal();
      });
    } else {
      this.reservationService.addReservation(this.bookingForm).subscribe(() => {
        this.getReservations();
        this.closeModal();
      });
    }
  }

  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.getReservations();
    });
  }


  private toggleBodyClass(add: boolean): void {
    if (add) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }
}
