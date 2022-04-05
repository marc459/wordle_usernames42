import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Api42Service {

  private url:string = "https://backend-42-wordle.herokuapp.com/";
  constructor(private http: HttpClient) { }

  getRandomUser()
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return(this.http.get(`${this.url}api/users`, {
      headers: header
    }));
  }
}
