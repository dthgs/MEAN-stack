import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }

  // Reach into backend and post to register
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // Add a value to the header
    return this.http.post('http://localhost:1234/users/register', user, {headers: headers})
    .pipe(map(res => res.json())); // Url, body, opts (can now subscribe)
  }
}
