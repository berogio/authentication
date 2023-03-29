import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css'],
})
export class DeletebookComponent {
  constructor(private MatDialog: MatDialog, private _router: Router) {}
  ISBN = new FormControl('');

  OnDeleteBook() {
    fetch('http://3.141.164.107:8000/deletebook', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ISBN: this.ISBN.value,
      }),
    }).then((response) => {
      if (response.status === 204) {
        this._router.navigate([this._router.url]);
        console.log('deleted');
        this.MatDialog.closeAll();
        // window.location.reload();
      }
    });
  }
}
