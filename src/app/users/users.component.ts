import { Component, Inject } from '@angular/core';
import { UsersService } from '../service/users.service';
import { RouterLink } from '@angular/router';
import User from '../types/user';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent {

  users : User[] = [];
  // userService = Inject(UsersService)

  constructor(private usersService : UsersService){}

  ngOnInit() : void{
    this.usersService.getUsers().subscribe(
      (result: User[]) => {
        this.users = result;
        console.log(result);
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
    console.log("User component has loaded!!!");
  }

}
