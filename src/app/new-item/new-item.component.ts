import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent {
  constructor(private MatDialog: MatDialog) {}
  Newbook = new FormGroup({
    ISBN: new FormControl(''),
    Name: new FormControl(''),
    Author: new FormControl(''),
  });

  onAddBook() {
    fetch('http://3.141.164.107:8000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.Newbook.value),
    }).then((response) => {
      if (response) {
        if (response.status === 201) {
          this.MatDialog.closeAll();
          // window.location.reload();
        }
      }
    });
  }
}
