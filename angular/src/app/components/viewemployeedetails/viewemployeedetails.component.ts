import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewemployeedetails',
  templateUrl: './viewemployeedetails.component.html',
  styleUrls: ['./viewemployeedetails.component.css']
})
export class ViewemployeedetailsComponent implements OnInit {
  id?:string
  employees : any
  constructor(public UserData : UserDataService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(typeof this.id)
    this.UserData.getdetails(this.id).subscribe((data) => {
      console.log('res', data)
      this.employees = data;
    })
  }

  deleteEmp(){
    this.UserData.deleteUser(this.id).subscribe((data:any)=>{
      this.router.navigateByUrl('allemployees');
      // this.employees = this.employees.filter(item => item.id != id);
      console.log('Post deleted successfully!');
    })
  }

}
