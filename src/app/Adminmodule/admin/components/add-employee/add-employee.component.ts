import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../../Authservice/authservice.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule, NgFor],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  employees: any[] = [];
  selectedEmployee: any = {}; 
  

  constructor(private employeeService: AuthserviceService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // Load all employees
  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error loading employees:', error);
      }
    );
  }

  // Open the modal for adding/updating employee
  openEmployeeModal(employee?: any): void {
    this.selectedEmployee = employee ? { ...employee } : {}; 
    const modal = new bootstrap.Modal(document.getElementById('employeeModal')!);
    modal.show();
  }

  // Save new employee
  saveEmployee(): void {
    this.employeeService.addEmployee(this.selectedEmployee).subscribe(
      () => {
        this.loadEmployees();
        bootstrap.Modal.getInstance(document.getElementById('employeeModal')!).hide();
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }

  // Update existing employee
  updateEmployee(): void {
    this.employeeService.updateEmployee(this.selectedEmployee, this.selectedEmployee.id).subscribe(
      () => {
        this.loadEmployees();
        bootstrap.Modal.getInstance(document.getElementById('employeeModal')!).hide();
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }

  // Delete an employee
  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => {
          this.loadEmployees();
        },
        (error) => {
          console.error('Error deleting employee:', error);
        }
      );
    }
  }
}
