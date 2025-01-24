import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enquiry, enquiryResponse } from '../model/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  private apiUrl = "http://localhost:4000/enquiry"

  submitEnquiry(enquiryData:enquiry): Observable<enquiryResponse> {
    return this.http.post<enquiryResponse>(this.apiUrl, enquiryData)
  }
}
