import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { Post } from '../components/user/Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // ----- get data by http ----
  getData(){
    // https://cors-anywhere.herokuapp.com/
    const response =  this.http.get<Post[]>("https://cors-anywhere.herokuapp.com/https://api.github.com/users");
    return response;
  }
  
}
