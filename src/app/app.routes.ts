import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'qr', component: QrCodeComponent },
    { path: '**', component: PageNotFoundComponent },
];
