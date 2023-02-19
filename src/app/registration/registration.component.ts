import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  RegForm = new FormGroup({
    Vorname: new FormControl('', [Validators.required, Validators.email]),
    Nachname: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
  });

  onCreateUser() {
    console.log(this.RegForm.value);
  }
}
