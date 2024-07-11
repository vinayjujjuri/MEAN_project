import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private REST_API : string = "http://localhost:4000"

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { 

  }

  getdetails(id:any){
    let API_URL : string = `${this.REST_API}/emp_details/${id}`
    return this.http.get(API_URL, {headers : this.httpHeaders})
  }

  saveusers(emp:Employee):Observable<any>{
    return this.http.post("http://localhost:4000/create_profile", JSON.stringify(emp), {headers : this.httpHeaders});
  }

  updateuser(id:any, emp:Employee){
    let API_URL : string = `${this.REST_API}/update_all/${id}`
    return this.http.put(API_URL,JSON.stringify(emp),{headers : this.httpHeaders})
  }
  deleteUser(id:any){
    let API_URL : string = `${this.REST_API}/deletebyId/${id}`
    return this.http.delete(API_URL,{headers : this.httpHeaders})
  }

}
