import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'about-us', component: AboutusComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'booking', component: BookingComponent},
    {path: 'contact-us', component: ContactComponent},



];
