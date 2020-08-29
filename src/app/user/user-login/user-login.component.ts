import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token=this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.username);
      this.router.navigate(['/']);
      this.alertify.success('Login Successfull');
    }else{
      this.alertify.error('Username or password is incorrect');
    }
  }

}
