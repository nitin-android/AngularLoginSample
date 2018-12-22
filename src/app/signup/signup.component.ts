import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  constructor(private router : Router) { }
  
  ngOnInit() {
  }

  signup(){
    if(this.email == 'dhiraj@gmail.com' && this.password == 'password') {
      this.router.navigate(['user']);
      }else {
      alert("Invalid credentials.")
      }
  }

}
