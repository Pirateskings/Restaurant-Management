import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { AdminModule } from './admin.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { authguardGuard } from '../../Authguard/authguard.guard';
import { SalarycalculationComponent } from './components/salarycalculation/salarycalculation.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { MenuComponent } from '../../menu/menu.component';
import { ServiceComponent } from '../../service/service.component';
import { AboutComponent } from '../../about/about.component';
import { ComplainComponent } from './components/complain/complain.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NewseltterComponent } from './components/newseltter/newseltter.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-dashboard', 
    pathMatch: 'full',
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'addemployee',
    component: AddEmployeeComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'salarycal',
    component: SalarycalculationComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'userlist',
    component: UserlistComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'complaint',
    component: ComplainComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'newsle',
    component: NewseltterComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'reservation',
    component: ReservationsComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'adminhome',
    component: HomeComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'adminmenu',
    component: MenuComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'adminservice',
    component: ServiceComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'adminabout',
    component: AboutComponent,
    canActivate: [authguardGuard],
  },
  {
    path: '**',
    redirectTo: 'admin-dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
