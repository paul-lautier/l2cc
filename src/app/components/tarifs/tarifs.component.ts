import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.css']
})
export class TarifsComponent {
  selectedPlan: string | null = null;

  plans = [
    {
      id: 'basique',
      name: 'Basique',
      price: '29',
      period: 'mois',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      features: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
        'Incididunt ut labore'
      ],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '59',
      period: 'mois',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      features: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
        'Incididunt ut labore',
        'Dolore magna aliqua',
        'Ut enim ad minim veniam'
      ],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      popular: true
    },
    {
      id: 'entreprise',
      name: 'Entreprise',
      price: '99',
      period: 'mois',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      features: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
        'Incididunt ut labore',
        'Dolore magna aliqua',
        'Ut enim ad minim veniam',
        'Quis nostrud exercitation',
        'Ullamco laboris nisi'
      ],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  toggleDetails(planId: string) {
    this.selectedPlan = this.selectedPlan === planId ? null : planId;
  }

  isDetailsOpen(planId: string): boolean {
    return this.selectedPlan === planId;
  }
}
