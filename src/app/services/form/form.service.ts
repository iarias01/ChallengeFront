import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private url = environment.urlApi;
  private path = 'api/form';
  constructor(private http: HttpClient) {}

  sendForm(form: any): Observable<any> {
    return this.http.post<any>(`${this.url}${this.path}`, form);
  }
}
