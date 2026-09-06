import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:5091/api';

  getServices() {
    return this.http.get<any[]>(`${this.apiUrl}/Services`);
  }

  getPackages() {
    return this.http.get<any[]>(`${this.apiUrl}/Packages`);
  }

  getProjects() {
    return this.http.get<any[]>(`${this.apiUrl}/Projects`);
  }

  getGallery(month: string = 'All') {
    return this.http.get<any[]>(
      `${this.apiUrl}/Gallery?month=${month}`
    );
  }

  getLocations() {
    return this.http.get<any[]>(`${this.apiUrl}/Locations`);
  }

  submitEnquiry(data: any) {
    return this.http.post(
      `${this.apiUrl}/Enquiries`,
      data
    );
  }
}