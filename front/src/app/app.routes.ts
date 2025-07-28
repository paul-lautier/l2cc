import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { RGPDComponent } from './components/rgpd/rgpd.component';
import { TarifsComponent } from './components/tarifs/tarifs.component';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'offres', component: TarifsComponent },
  { path: 'rgpd', component: RGPDComponent },
  { path: '**', redirectTo: '/home' }
];
