import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  BASE_URI = 'https://api.github.com/';
  ALAN_LIMA_91 = 'AlanLima91/';

  constructor(private http: HttpClient) { }

  getTest(): Observable<object> {
    return this.http.get(`${this.BASE_URI}users/${this.ALAN_LIMA_91}repos`);
  }
}
