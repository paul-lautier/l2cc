import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { RGPDComponent } from './components/rgpd/rgpd.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { TarifsComponent } from './components/tarifs/tarifs.component';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'rgpd', component: RGPDComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: '**', redirectTo: '/home' }
];
