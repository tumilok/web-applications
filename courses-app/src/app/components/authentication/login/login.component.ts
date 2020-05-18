import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.signInForm = new FormGroup({
      email: new FormControl,
      password: new FormControl
    });
  }

  trySignIn(value) {
    this.authService.signIn(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "You successfuly signed-in";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
  
}
