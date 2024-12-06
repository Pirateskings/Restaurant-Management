import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { authguardGuard } from './Authguard/authguard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Default redirect
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    canActivate: [authguardGuard], // Apply guard for protected routes
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Adminmodule/admin/admin-routing.module').then(
        (m) => m.AdminRoutingModule
      ),
    canActivate: [authguardGuard],
  },
  // Wildcard route to handle invalid routes
  { path: '**', redirectTo: 'login' },
];

