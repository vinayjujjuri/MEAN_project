import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-add-employee-component',
  templateUrl: './add-employee-component.component.html',
  styleUrls: ['./add-employee-component.component.css'],
  providers: [UserDataService],
})
export class AddEmployeeComponentComponent implements OnInit {
  employee: any = {
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    department: '',
    project: ''
  };
  showMsg: boolean = false;
  form: FormGroup;
  submitted : boolean = false;
  constructor(
    private userData: UserDataService
  ) {}

  ngOnInit(): void {
    console.log('EMP', this.employee);
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z]*')]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone_number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      department: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z]*')]),
      project: new FormControl('', [Validators.required,  Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z]*')]),
    });
  }

  getEmployeeName(event: any) {
    this.employee.firstname = event.target.value;
  }
  getLastName(event: any) {
    this.employee.lastname = event.target.value;
  }
  getEmail(event: any) {
    this.employee.email = event.target.value;
  }
  getPhoneno(event: any) {
    this.employee.phone_number = parseInt(event.target.value);
  }
  getDepartment(event: any) {
    this.employee.department = event.target.value;
  }
  getProject(event: any) {
    this.employee.project = event.target.value;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.form.invalid){
      return;
    }
    else {
    this.userData.saveusers(this.employee).subscribe((data) => {
      console.log(data);
      if (data.status === 200) {
        this.showMsg = true;
      }
    });
  }
  }
}
