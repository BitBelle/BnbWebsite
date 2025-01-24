import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { booking, bookingResponse } from '../model/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  private apiUrl = "http://localhost:4000/booking"

  submitBooking(bookingData: booking): Observable<bookingResponse> {
    return this.http.post<bookingResponse>(this.apiUrl, bookingData)
  }
}
