import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../interface';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  email: Email;
  constructor(private readonly http: HttpClient) {
    this.email = null;
  }
  contact(email: Email): Observable<any> {
    return this.http.post('/email', email);
  }
  sendResume(email: Email): Observable<any> {
    return this.http.put('/email', email);
  }
}
