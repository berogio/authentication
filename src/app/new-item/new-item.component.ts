import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../service/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
})
export class NewItemComponent {
  image: any;
  ISBN: any;
  Name: any;
  Author: any;

  constructor(
    private MatDialog: MatDialog,
    private http: UsersService,
    private https: HttpClient,
    private fb: FormBuilder
  ) {}

  AddBookForm = this.fb.group({
    ISBN: ['', Validators.required],
    Name: ['', Validators.required],
    Author: ['', Validators.required],
  });

  // Newbook = new FormGroup({
  //   ISBN: new FormControl(''),
  //   Name: new FormControl(''),
  //   Author: new FormControl(''),
  // });

  selectedImg(event: any) {
    const file = event.target.files[0];
    this.image = file;
  }

  onAddBook() {
    if (this.AddBookForm.valid) {
      this.ISBN = this.AddBookForm.controls.ISBN.value;
      this.Name = this.AddBookForm.controls.Name.value;
      this.Author = this.AddBookForm.controls.Author.value;
      const formdata = new FormData();
      formdata.append('prductImage', this.image);
      formdata.append('ISBN', this.ISBN);
      formdata.append('Name', this.Name);
      formdata.append('Author', this.Author);

      // this.https
      //   .post<any>('http://localhost:8000/books', formdata)
      //   .subscribe((e) => {
      //     console.log(e);
      //   });

      fetch('http://3.141.164.107:8000/books', {
        method: 'POST',
        body: formdata,
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
}
