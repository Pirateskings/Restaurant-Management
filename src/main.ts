import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { MenuComponent } from './app/menu/menu.component';
import { ServiceComponent } from './app/service/service.component';
import { AboutComponent } from './app/about/about.component';
import { LoginComponent } from './app/login/login.component';
import { authguardGuard } from './app/Authguard/authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    canActivate:[authguardGuard],
     children:[
      { path: 'home', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'about', component: AboutComponent },
     ]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./app/Adminmodule/admin/admin-routing.module').then(
        (m) => m.AdminRoutingModule
      ),
    canActivate: [authguardGuard],
  },
  // Wildcard route to handle invalid routes
  { path: '**', redirectTo: 'login' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
