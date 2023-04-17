import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public logined: boolean = false;
  constructor(private _router: Router, private usersService: UsersService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {
    this.onGetUsers();
  }

  getErrorMessage() {
    if (this.loginForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.controls.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  onGetUsers() {
    if (this.loginForm.valid) {
      fetch('http://3.141.164.107:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.loginForm.value),
      }).then((response) => {
        if (response.status === 200) {
          console.log(response.json());
          sessionStorage.setItem(
            'username',
            JSON.stringify(this.loginForm.get('email')?.value)
          );
          this.logined = true;
          this._router.navigate(['/panel']);
        } else console.log('bad password or name');
      });
    }
  }
}
