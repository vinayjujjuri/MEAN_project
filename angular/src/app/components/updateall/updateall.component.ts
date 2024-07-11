import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateall',
  templateUrl: './updateall.component.html',
  styleUrls: ['./updateall.component.css']
})
export class UpdateallComponent implements OnInit {
  showMsg : boolean = false
  employees : any
  
  id?:string
  constructor(public UserData : UserDataService, private route: ActivatedRoute,
    private router: Router) { 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(typeof this.id)
    this.UserData.getdetails(this.id).subscribe((data) => {
      console.log('res', data)
      this.employees = data;
    })
  }
  getEmployeeName(event:any){
    this.employees.firstname = event.target.value
  }
  getLastName(event:any){
    this.employees.lastname = event.target.value
  }
  getEmail(event:any){
    this.employees.email = event.target.value
  }
  getPhoneno(event:any){
    this.employees.phone_number = parseInt(event.target.value)
  }
  getDepartment(event:any){
    this.employees.department = event.target.value
  }
  getProject(event:any){
    this.employees.project = event.target.value
  }
  updateForm(){
    this.UserData.updateuser(this.id, this.employees).subscribe(
      (data:any) => {
      console.log(data)
      if(data.status === 200) {
        this.showMsg= true;
      }
    })
  }
}
