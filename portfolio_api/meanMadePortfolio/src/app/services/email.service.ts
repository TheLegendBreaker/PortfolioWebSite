import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../interface';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  email: string;
  constructor(private readonly http: HttpClient) {}
  contact(email: Email): Observable<any> {
    return this.http.post('/email', email);
  }
  sendResume(email: string): Observable<any> {
    return this.http.put('/email', email);
  }
}
