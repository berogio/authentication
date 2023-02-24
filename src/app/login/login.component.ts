import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.onGetUsers();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this._router.navigate(['/panel']);
    }
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
      fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.loginForm.value),
      }).then((response) => {
        if (response.status === 200) {
          this._router.navigate(['/panel']);
        }
      });
    }
  }
}
