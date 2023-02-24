import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private _router: Router) {}
  RegForm = new FormGroup({
    Vorname: new FormControl('', [Validators.required]),
    Nachname: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
  });

  onCreateUser() {
    if (this.RegForm.valid) {
      fetch('http://localhost:8000/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.RegForm.value),
      }).then((response) => {
        if (response.status === 200) {
          this._router.navigate(['/login']);
        }
      });
    }
  }
}
