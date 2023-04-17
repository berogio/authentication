import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements DoCheck {
  gender = '';

  isLogged: boolean = false;
  re: boolean = true;

  constructor(private userService: UsersService, private _router: Router) {}

  ngDoCheck(): void {
    if (this.userService.isLoggedIn()) {
      this.re = false;
      this.isLogged = true;
    } else {
      this.re = true;
      this.isLogged = false;
    }
  }
  logout() {
    sessionStorage.clear();
    this._router.navigate(['/']);
  }
}
