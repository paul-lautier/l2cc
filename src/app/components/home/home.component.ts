import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'pi pi-user',
      features: ['Lorem ipsum dolor sit', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor']
    },
    {
      id: 2,
      title: 'Consectetur Adipiscing',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: 'pi pi-heart',
      features: ['Duis aute irure dolor', 'Reprehenderit voluptate', 'Velit esse cillum']
    },
    {
      id: 3,
      title: 'Sed Do Eiusmod',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      icon: 'pi pi-star',
      features: ['Excepteur sint occaecat', 'Cupidatat non proident', 'Sunt in culpa qui']
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      role: 'Dolor Sit Amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5
    },
    {
      id: 2,
      name: 'Consectetur Adipiscing',
      role: 'Elit Sed Do',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5
    },
    {
      id: 3,
      name: 'Eiusmod Tempor',
      role: 'Incididunt Labore',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      rating: 5
    }
  ];

  statistics: Statistic[] = [
    {
      id: 1,
      value: '200+',
      label: 'Lorem Ipsum',
      icon: 'pi pi-users'
    },
    {
      id: 2,
      value: '5+',
      label: 'Dolor Sit Amet',
      icon: 'pi pi-calendar'
    },
    {
      id: 3,
      value: '95%',
      label: 'Consectetur Adipiscing',
      icon: 'pi pi-thumbs-up'
    },
    {
      id: 4,
      value: '24/7',
      label: 'Elit Sed Do',
      icon: 'pi pi-phone'
    }
  ];
}
