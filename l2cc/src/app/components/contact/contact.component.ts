import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData: ContactFormData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      // Here you would typically send the data to a service
      alert('Thank you for your message! We will get back to you soon.');
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.name && this.formData.phone && this.formData.email);
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  }
}
