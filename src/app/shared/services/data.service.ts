import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


import { Post } from '../../components/user/Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string;
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.baseBackEndUrl;
  }

  // ----- get data by http ----
  getData(){
    // https://cors-anywhere.herokuapp.com/
    // const response =  this.http.get<Post[]>("https://cors-anywhere.herokuapp.com/https://api.github.com/users");
    // return response;
    const response =  this.http.get<Post[]>(`${this.apiUrl}`);
    return response;
  }
  
}
