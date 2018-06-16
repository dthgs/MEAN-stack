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

  // Post request to register
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); // Add a value to the header
    return this.http.post('http://localhost:1234/users/register', user, {headers: headers})
    .pipe(map(res => res.json())); // Url, body, opts (can now subscribe)
  }

  // Post request to authenticate
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // If successful, returns token and user info
    return this.http.post('http://localhost:1234/users/authenticate', user, {headers: headers})
    .pipe(map(res => res.json()));
  }

  storeUserData(token, user){
    // Local storage can only store strings
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    console.log(JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
