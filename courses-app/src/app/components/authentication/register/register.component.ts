import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.registerForm = new FormGroup({
      email: new FormControl,
      password: new FormControl
    });
  }

  tryRegister(value) {
    this.authService.signUp(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
}
