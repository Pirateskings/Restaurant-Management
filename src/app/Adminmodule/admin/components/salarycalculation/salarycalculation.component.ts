import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { error } from 'console';
import { pipe } from 'rxjs';
import { setEnvironmentData } from 'worker_threads';

@Component({
  selector: 'app-salarycalculation',
  imports: [FormsModule,NgIf,CommonModule],
  templateUrl: './salarycalculation.component.html',
  styleUrl: './salarycalculation.component.css'
})
export class SalarycalculationComponent {

  username : string='';
  baseSalary: number = 0;
  bonus: number = 0;
  hra: number = 0; 
  pa: number = 0; 
  ta: number = 0;
  esi : number = 0;
  deduction : number = 0;
  grossSalary: number | null = null;
  netSalary: number | null = null;

  private http =inject(HttpClient);
  onSubmit() {
    
    const hraAmount = (this.baseSalary * this.hra) / 100;
    const paAmount = (this.baseSalary * this.pa) / 100;
    const taAmount = (this.baseSalary * this.ta) / 100;
    const  esiAmount =(this.baseSalary * this.esi) / 100;
    const deduction = this.deduction;

    
    this.grossSalary =
      this.baseSalary + hraAmount  + taAmount + esiAmount + this.bonus;

    
    this.netSalary = this.grossSalary -  paAmount - deduction;
   const  totalsalary =this.netSalary;
    
    this.http.post(`http://localhost:8080/api/netsalary/${this.username}`,totalsalary,{responseType:'text'}).subscribe({
      next :(response :string)=>
      {
        if(response === "Calculated"){
        console.log("Scuccessfully Calculated"+response);
        return
      }
    }
  ,
      error:(error:any)=>{
        console.error(error);
        alert("Error"+error);
      }
    })

}
  
}
