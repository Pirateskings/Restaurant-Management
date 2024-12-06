import { Component, OnInit } from '@angular/core';
import { AddEmployeeComponent } from "../add-employee/add-employee.component";
import { HomeComponent } from '../../../../home/home.component';
import { MenuComponent } from '../../../../menu/menu.component';
import { ServiceComponent } from "../../../../service/service.component";
import { AboutComponent } from "../../../../about/about.component";
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  imports: [HomeComponent, MenuComponent, ServiceComponent, AboutComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.routerState.snapshot.root.fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
  }

}
