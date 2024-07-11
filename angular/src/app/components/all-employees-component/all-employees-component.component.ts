import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-employees-component',
  templateUrl: './all-employees-component.component.html',
  styleUrls: ['./all-employees-component.component.css']
})
export class AllEmployeesComponentComponent implements OnInit {

  employees : any[] = []
  id?:string
  constructor(private http: HttpClient,public UserData : UserDataService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['e._id']
    console.log(typeof this.id)
    this.http.get('http://localhost:4000/get_all_emp_details').subscribe((employees:any) => {
    console.log('res', employees)
    this.employees = employees;
  })
}


}