import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {


  // =========================================
  // GOOGLE APPS SCRIPT URL
  // =========================================

  private feedbackUrl =
    'https://script.google.com/macros/s/AKfycbxayXw0CawWf9HJXlccTghjBeTEIl52baNh1OTlgwLb714xUVmGnKbjzav3ZeCkO8MzRQ/exec';


  // =========================================
  // FEEDBACK FORM VALUES
  // =========================================

  name = '';

  phone = '';

  service = '';

  rating = 0;

  feedback = '';


  // =========================================
  // SUBMIT STATE
  // =========================================

  isSubmitting = false;


  // =========================================
  // STAR RATING
  // =========================================

  setRating(value: number): void {

    this.rating = value;

  }


  // =========================================
  // SUBMIT FEEDBACK
  // =========================================

  async submitFeedback(): Promise<void> {


    // Prevent multiple submissions

    if (this.isSubmitting) {
      return;
    }


    // =========================================
    // VALIDATION
    // =========================================

    if (
      !this.name.trim() ||
      !this.phone.trim() ||
      !this.service ||
      this.rating === 0 ||
      !this.feedback.trim()
    ) {

      alert(
        'Please fill in all the details and select a rating.'
      );

      return;
    }


    // =========================================
    // START LOADING
    // =========================================

    this.isSubmitting = true;


    // =========================================
    // DATA FOR GOOGLE SHEET
    // =========================================

    const feedbackData = {

      date: new Date().toISOString(),

      name: this.name.trim(),

      phone: this.phone.trim(),

      service: this.service,

      rating: this.rating,

      feedback: this.feedback.trim()

    };


    console.log(
      'Sending customer feedback:',
      feedbackData
    );


    // =========================================
    // SEND TO GOOGLE APPS SCRIPT
    // =========================================

    try {

      await fetch(
        this.feedbackUrl,
        {
          method: 'POST',

          mode: 'no-cors',

          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },

          body: JSON.stringify(feedbackData)
        }
      );


      // =======================================
      // SUCCESS
      // =======================================

      alert(
        'Thank you! Your feedback has been submitted successfully.'
      );


      // Clear form

      this.clearFeedbackForm();


    } catch (error) {


      // =======================================
      // ERROR
      // =======================================

      console.error(
        'Feedback submission failed:',
        error
      );


      alert(
        'Unable to submit your feedback. Please try again.'
      );

    }


    // =========================================
    // STOP LOADING
    // =========================================

    this.isSubmitting = false;

  }


  // =========================================
  // CLEAR FORM
  // =========================================

  private clearFeedbackForm(): void {

    this.name = '';

    this.phone = '';

    this.service = '';

    this.rating = 0;

    this.feedback = '';

  }

}