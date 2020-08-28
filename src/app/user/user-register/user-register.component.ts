import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required , Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])

    },this.passwordMatchingValidator);
  }
  passwordMatchingValidator(fg: FormGroup): Validators{
   return fg.get('password').value===fg.get('confirmPassword').value? null :{notmatched: true};
  }
  get username(){
    return this.registrationForm.get('username') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }


  onSubmit(){
    console.log(this.registrationForm);
  }

}
