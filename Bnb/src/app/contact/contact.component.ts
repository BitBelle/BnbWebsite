import { Component, ViewChild, viewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../services/contact.service';
import { MessageComponent } from "../message/message.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, MessageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})

export class ContactComponent {
  constructor(private contactService: ContactService) {}

  @ViewChild('form') form!: NgForm;

  // list of enquiries
  enquiries = ['General enquiry', 'Booking Issue', 'Other'];

  // custom message
  customMessage!: string;
  messageType: 'success' | 'error' = 'success';

  // co-ordinates for the location 
  latitude: number = -1.251082;
  longitude: number = 36.686460;

  openGoogleMaps(): void {
    const googleMapsUrl = `https://www.google.com/maps/@${this.latitude},${this.longitude},18z?q=${this.latitude},${this.longitude}`;
    window.open(googleMapsUrl, '_blank');
  }

  //form section
  onSubmit() {
    if (this.form.valid) {
      //extract data
      const enquiryData = this.form.value;

      //subscribing
      this.contactService.submitEnquiry(enquiryData).subscribe({
        next: (response) => {
          console.log('Enquiry submitted successfully', response);
          this.customMessage = "Enquiry made successfully! We'll be in touch soon.";
          this.messageType = 'success';
          this.form.reset();
        },
        error: (error) => {
          console.log('Error submitting enquiry', error);
          this.customMessage = 'Failed to submit enquiry. Please try again.';
          this.messageType = 'error';
        },
      });
    }
  }
}
