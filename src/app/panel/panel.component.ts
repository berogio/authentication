import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletebookComponent } from '../deletebook/deletebook.component';
import { NewItemComponent } from '../new-item/new-item.component';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public booksList: any;

  constructor(private book: UsersService, private MatDialog: MatDialog) {}
  ngOnInit(): void {
    this.book.getBooks().subscribe((res) => {
      this.booksList = res;
    });

    // fetch('http://3.141.164.107:8000/books')
    //   .then((_) => _.json())
    //   .then((res) => {
    //     this.booksList = res;
    //   });

    // const getbooks = async () => {
    //   this.booksList = await fetch('http://3.141.164.107:8000/books').then(
    //     (_) => _.json()
    //   );
    // };
    // getbooks();
  }

  openDialogDel() {
    this.MatDialog.open(DeletebookComponent);
  }
  openDialogAdd() {
    this.MatDialog.open(NewItemComponent);
  }
}
