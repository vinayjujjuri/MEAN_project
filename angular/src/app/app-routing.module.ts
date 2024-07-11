import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponentComponent } from './components/add-employee-component/add-employee-component.component';
import { AllEmployeesComponentComponent } from './components/all-employees-component/all-employees-component.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { UpdateallComponent } from './components/updateall/updateall.component';
import { ViewemployeedetailsComponent } from './components/viewemployeedetails/viewemployeedetails.component';



const routes: Routes = [
  {path: "", component:MainComponentComponent},
  {path:"addemployee", component:AddEmployeeComponentComponent},
  {path:"allemployees", component:AllEmployeesComponentComponent},
  {path:"viewempdetails/:id", component:ViewemployeedetailsComponent},
  {path: "updatealldetails/:id", component:UpdateallComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AddEmployeeComponentComponent,MainComponentComponent, AllEmployeesComponentComponent,ViewemployeedetailsComponent,UpdateallComponent]