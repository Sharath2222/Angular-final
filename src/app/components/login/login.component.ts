import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = {

   
    username:'' ,
    password:'',
    
  };

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.userForm).subscribe({
      next:(response:any)=>{
        console.log(response);
        localStorage.setItem('username',response.username);
        localStorage.setItem('isAdmin',response.isAdmin);
        this.router.navigate(['']);
        
      },
      error:(error:any)=>{
        console.log(error);
        
      }
    });

    
  }

}
