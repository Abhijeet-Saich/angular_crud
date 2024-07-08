import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../types/user';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  apiURL = "http://localhost:3000";

  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiURL + '/users');
  }

  addUser(model:User){
    return this.httpClient.post(this.apiURL + `/users`,model);
  }
}
