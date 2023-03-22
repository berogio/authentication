import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css'],
})
export class DeletebookComponent {
  ISBN = new FormControl('');

  OnDeleteBook() {
    fetch('http://localhost:8000/deletebook', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ISBN: this.ISBN.value,
      }),
    }).then((response) => {
      if (response.status === 200) {
        window.location.reload();
      }
    });
  }
}
