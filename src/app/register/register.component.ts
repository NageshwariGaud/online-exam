import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent 
{

  user:User=new User('','',0,'');
  users:User[] = [];
  message:string="";
  // router: any;

  constructor(private userService:UserService,private router:Router)
  {
    
  }
  
  saveUser()
  {
    this.userService.saveUser(this.user).subscribe(userfromapi=>this.message=userfromapi.username + " your data is saved "); // subscribe() is must .
  }
  goToLogin() {
    this.router.navigateByUrl("login"); // Ensure this path is correct
  }
}
