import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) {}

  request(method: string, url: string, endpoint: string) {
    return this.http.request(method, `${url}${endpoint}`);
  }
}
