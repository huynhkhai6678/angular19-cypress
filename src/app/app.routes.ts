import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgreementComponent } from './agreement/agreement.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { 
        path: 'dashboard', component: DashboardComponent,
        children: [
            {
              path: '',
              component: AgreementComponent
            },
        ],
    },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: LoginComponent }
];
