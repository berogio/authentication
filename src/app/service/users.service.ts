import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/books').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // postUsers(): Observable<Users[]> {
  //   return this.http.post<Users[]>('http://localhost:8000/');
  // }
}
