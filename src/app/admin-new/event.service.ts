import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Event } from "./event";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class EventService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  public createEvent(event){
    alert(event);
    return this.http.post<Event>(this.baseUrl + "eventcreation", event);
  }
}

