import { Component,Inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import User from '../types/user';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})

export class UserFormComponent {

  formBuild = Inject(ReactiveFormsModule);
  userService = Inject(UsersService);
  router = Inject(Router);

  userForm : FormGroup = this.formBuild({
    name : ['',[Validators.required]],
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required,Validators.minLength(8)]],
    address : [''],
    age : [''],
  })


  addUser(){
    if(this.userForm.invalid){
      alert("Kindly provide all the details...")
      return
    }
    console.log(this.userForm.value);

    const model:User = this.userForm.value;
    this.userService.addUser(model).subscribe(()=> alert("User Added Successfully"));
    this.router.navigateByUrl('/')
  }
}
