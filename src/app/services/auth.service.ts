import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';
import {jwtHelper} from 'angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthenService implements OnInit{

  authToken: any;
  user:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      
  }
  registerUser(user)
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('https://employee-managemant-client.vercel.app/users/register', user, {headers: headers}).pipe(map(res => res));
  }

  authenticateUser(user)
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application-json');
    return this.http.post('https://employee-managemant-client.vercel.app/users/login', user, {headers: headers}).pipe(map(res => res));
  }

  storeUserData(token, user)
  {
    console.log(token, user)
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  getEmployee()
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log('Okay')
    return this.http.get('https://employee-managemant-client.vercel.app/users/get');
  }

  getManager()
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://employee-managemant-client.vercel.app/managers/get');
  }

  matcher(items)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://employee-managemant-client.vercel.app/admin/match', items,{headers: headers}).pipe(map(res => res));
  }

  getSelectEmployees(token)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(token)
    return this.http.post('https://employee-managemant-client.vercel.app/managers/assign',token,{headers: headers}).pipe(map(res => res));
  }

  logout()
  {
    this.authToken = null
    this.user = null
    localStorage.clear()
  }

  Assignment(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(data)
    return this.http.post('https://employee-managemant-client.vercel.app/managers/assignment',data,{headers: headers}).pipe(map(res => res));
  }  
  getProfile()
  {
    this.loadToken()
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json')
    return this.http.get('https://employee-managemant-client.vercel.app/users/me',{headers: headers}).pipe(map(res => res))
  }

  loadToken()
  {
    const token = localStorage.getItem('id_token')
    this.authToken = token
  }
  getToken()
  {
    return localStorage.getItem('id_token')
  }

  Leave(leave)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(leave)
    return this.http.post('https://employee-managemant-client.vercel.app/users/leave',leave,{headers: headers}).pipe(map(res => res));

  }

  tasks(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(data["_id"])
    const id = {
      id : data["_id"],
    }
    return this.http.post('https://employee-managemant-client.vercel.app/users/tasks', id, {headers: headers}).pipe(map(res => res));
  }

  displayRequests(manager){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post('https://employee-managemant-client.vercel.app/managers/displayRequests', manager, {headers: headers}).pipe(map(res => res))
  }
  Grant(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');    
    return this.http.post('https://employee-managemant-client.vercel.app/managers/grantRequest', data, {headers: headers}).pipe(map(res => res))
  }

  message(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');    
    return this.http.post('https://employee-managemant-client.vercel.app/users/message', data, {headers: headers}).pipe(map(res => res))
  }

  fetchMessage(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');    
    return this.http.post('https://employee-managemant-client.vercel.app/users/fetchmessage', data, {headers: headers}).pipe(map(res => res))
  }

  getTasks(data){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');    
    return this.http.post('https://employee-managemant-client.vercel.app/users/tasklist', data, {headers: headers}).pipe(map(res => res))

  }

  suggestions(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(data)
    return this.http.post('https://employee-managemant-client.vercel.app/managers/gss',data,{headers: headers}).pipe(map(res => res));  
  }

  lister(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(data)
    return this.http.post('https://employee-managemant-client.vercel.app/managers/get',data,{headers: headers}).pipe(map(res => res));  

  }

  close(id)
  {
    const data = {
      id: id
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');    
    return this.http.post('https://employee-managemant-client.vercel.app/managers/deleteTask', data,{headers: headers}).pipe(map(res => res))
  }
}
