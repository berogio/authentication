import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>('http://3.141.164.107:8000/books').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  onAddBook(gio: any) {
    return this.http.post<any>('http://localhost:8000/books', gio);
  }
}
