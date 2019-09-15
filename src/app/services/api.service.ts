import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  private baseUrl = environment.cloudAdminApiBase;

  constructor(private http: HttpClient) {
  }

  private get(path: string, params = {}): Observable<any> {
    return this.http.get(this.baseUrl + path, {params});
  }

  private post(path: string, body: any = null): Observable<any> {
    return this.http.post(this.baseUrl + path, body);
  }

  private delete(path: string): Observable<any> {
    return this.http.delete(this.baseUrl + path, {});
  }

  private put(path: string, body: any, options: any = {}): Observable<any> {
    return this.http.put(this.baseUrl + path, body, options);
  }


  public getUsers(): Observable<User[]> {
    return this.get('/users').pipe(map(response => User.fromJsonArray(response)));
  }

}
