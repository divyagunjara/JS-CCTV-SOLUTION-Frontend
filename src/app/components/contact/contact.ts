import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],

  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  // =========================================
  // API
  // =========================================

  private apiUrl =
  'https://jscctvsolution-api-production.up.railway.app/api/Enquiries';


  // =========================================
  // FORM VALUES
  // =========================================

  name = '';

  phone = '';

  email = '';

  propertyType = '';

  service = '';

  message = '';


  // =========================================
  // SUBMIT STATE
  // =========================================

  isSubmitting = false;


  // =========================================
  // HTTP CLIENT
  // =========================================

  constructor(
    private http: HttpClient
  ) {}


  // =========================================
  // SUBMIT ENQUIRY
  // =========================================

  submitEnquiry(): void {

    // Prevent multiple clicks
    if (this.isSubmitting) {
      return;
    }


    // Check required fields
    if (
      !this.name.trim() ||
      !this.phone.trim() ||
      !this.email.trim() ||
      !this.propertyType ||
      !this.service ||
      !this.message.trim()
    ) {

      alert(
        'Please fill in all the details before submitting.'
      );

      return;
    }


    // Start loading
    this.isSubmitting = true;


    // =========================================
    // DATA SENT TO API
    // =========================================

    const enquiry = {

      id: 0,

      name: this.name.trim(),

      phone: this.phone.trim(),

      email: this.email.trim(),

      propertyType: this.propertyType,

      service: this.service,

      message: this.message.trim(),

      status: 'New',

      createdAt: new Date().toISOString()

    };


    console.log(
      'Sending enquiry:',
      enquiry
    );


    // =========================================
    // POST TO API
    // =========================================

    this.http
      .post(
        this.apiUrl,
        enquiry
      )
      .subscribe({

        // =====================================
        // SUCCESS
        // =====================================

        next: (response) => {

          console.log(
            'Enquiry saved successfully:',
            response
          );


          alert(
            'Thank you! Your enquiry has been submitted successfully.'
          );


          // Clear form
          this.clearForm();


          // Stop loading
          this.isSubmitting = false;

        },


        // =====================================
        // ERROR
        // =====================================

        error: (error) => {

          console.error(
            'Enquiry submission failed:',
            error
          );


          alert(
            'Unable to submit your enquiry. Please try again or call us directly.'
          );


          this.isSubmitting = false;

        }

      });

  }


  // =========================================
  // CLEAR FORM
  // =========================================

  private clearForm(): void {

    this.name = '';

    this.phone = '';

    this.email = '';

    this.propertyType = '';

    this.service = '';

    this.message = '';

  }

}