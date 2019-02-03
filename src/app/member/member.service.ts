import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member';
import { Observable } from 'rxjs';
import { IEvent } from './event';
import { HttpHeaders } from '@angular/common/http';
import { JoinEvents } from './joinEvents';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/jason'})
};

@Injectable()
  
export class MemberService {
  
  public date = new Date();

  //private memberid: string = new Member().username;

  private _url1: string = "/assets/data/members.json";
  private _url2: string = "/assets/data/events.json";
  private _url3: string = "/assets/data/joinedEvents.json";
  
  private memberUrl = 'http://localhost:8080/api';
  private joineventurl = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }
  
getMembers(): Observable<Member[]>{
  return this.http.get<Member[]>(this._url1);
}

getJoinedEvents(): Observable<IEvent[]>{
  return this.http.get<IEvent[]>(this._url3);
}

getEvents(): Observable<IEvent[]>{
  return this.http.get<IEvent[]>(this._url2);
}


public updateMember(member){
  alert(event);
  return this.http.post<Member>(this.memberUrl+'/membercreate',member);
}

public createJoinEvent(joinevent){
  return this.http.post<JoinEvents>(this.joineventurl+'/joineventcreate/2/0004',joinevent);

}
}