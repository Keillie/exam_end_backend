import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  /*form: any ={
    username:null,
    email:null,
    password:null,
    password_confirmation:null
  };

  isSuccessful=false;
  isSingUpFailed=false;*/

  constructor(
    //private authService:AuthService;
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
