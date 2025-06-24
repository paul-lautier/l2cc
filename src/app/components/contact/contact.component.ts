import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { IftaLabelModule } from 'primeng/iftalabel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule,InputMaskModule,IftaLabelModule,DialogModule,ButtonModule],
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
      alert('Merci pour votre message, je reviendrais vers vous le plus vite possible.');
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

  onPhoneKeyPress(event: KeyboardEvent): void {
    const allowedChars = /[0-9]/;
    const key = event.key;
    const target = event.target as HTMLInputElement;
    const currentValue = target.value;
    

    if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      return;
    }
    

    if (!allowedChars.test(key)) {
      event.preventDefault();
      return;
    }
  

    const numbersOnly = currentValue.replace(/\s/g, '');
    if (numbersOnly.length >= 10) {
      event.preventDefault();
      return;
    }
    setTimeout(() => {
      const value = target.value.replace(/\s/g, ''); // Remove existing spaces
      const formatted = value.replace(/(\d{2})(?=\d)/g, '$1 '); // Add space every 2 digits
      target.value = formatted;
      this.formData.phone = formatted;
    }, 0);
   
  }
}
