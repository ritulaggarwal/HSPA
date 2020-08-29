import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import * as alertify from 'alertifyjs';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean=false;

  constructor(private fb: FormBuilder, private userService: UserService,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    /*this.registrationForm=new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required , Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])

    },this.passwordMatchingValidator);*/
    this.createRegistrationForm();
  }
  createRegistrationForm(){
    this.registrationForm=this.fb.group({
      username: [null,Validators.required],
      email: [null,[Validators.required, Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null,[Validators.required,Validators.maxLength(10)]]
    },{validators: this.passwordMatchingValidator
    });
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
    this.userSubmitted=true;
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value);
      //this.user=Object.assign(this.user,this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted=false;
      this.alertify.success('Congrats, you are registered successfully!');
    }else{
      this.alertify.error('Kindly provide the required field');

    }
  }
  userData(): User{
    return this.user={
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
  onReset(){
    this.userSubmitted=false;
    this.registrationForm.reset();
  }

}
