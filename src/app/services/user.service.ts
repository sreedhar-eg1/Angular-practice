import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MockUser {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient)

  constructor() { }

 getSingleUser(): Observable<MockUser[]> {
  return this.http.get<MockUser[]>('https://example.api.com/users')
  }

}
