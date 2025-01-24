import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingService } from '../services/booking.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [[NavbarComponent], [FormsModule], [CommonModule], [MessageComponent]],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {
  customMessage: string | null = null;
  messageType: 'success' | 'error' = 'success';

  ngOnInit(): void {}

  constructor(
    private bookingService: BookingService) {}

  @ViewChild('form') form!: NgForm;

  onSubmit() {
    if (this.form.valid) {
      //extract form data
      const bookingData = this.form.value;

      // send the data to the backend
      this.bookingService.submitBooking(bookingData).subscribe(
        (response) => {
          console.log('Booking submitted successfully', response);
          // alert('Booking submitted successfully');
          this.customMessage = "Booking made successfully! We'll be in touch soon.";
          this.messageType = 'success';
          this.form.reset();
        },
        (error) => {
          console.error('Error submitting booking', error);
          // alert('Failed to submit booking. Please try again.');
          this.customMessage = 'Failed to submit booking. Please try again.';
          this.messageType = 'error';
        }
      );
    }
  }
}
