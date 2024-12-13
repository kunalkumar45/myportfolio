import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import VanillaTilt from 'vanilla-tilt';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }

  @ViewChildren('tiltElement') tiltElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.tiltElements.forEach((tiltElement) => {
        VanillaTilt.init(tiltElement.nativeElement, {
          max: 15,
          speed: 100,
          glare: false,
          'max-glare': 0.5
        });
      });
    }
  }

  // form control

  private accessKey: string = '8a4d5253-db85-4210-a242-7e3d1859adbf';

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  resultMessage: string = '';
  onSubmit(form: any) {
    if (form.invalid) {
      this.resultMessage = 'Please fill out the form correctly.';
      return;
    }

    const formData = {
      access_key: this.accessKey,
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    this.resultMessage = 'Please wait...';

    this.http.post('https://api.web3forms.com/submit', formData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).subscribe(
      (response: any) => {
        this.resultMessage = 'Thank you for contacting us! We will respond as soon as possible.';
        form.reset();
        setTimeout(() => {
          this.resultMessage = '';
        }, 10000); // Hide result after 10 seconds
      },
      (error: any) => {
        this.resultMessage = 'Something went wrong! Please try again. or Contact Using phone number';
        console.error('Fetch error:', error);
      }
    );
  }
}
