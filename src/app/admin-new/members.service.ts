import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './member';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/jason'})
};

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  Member: any;
  private memberUrl = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  
  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.memberUrl);
  }
// retrieveMember(member) {
//     this.Member.pull({
//       firstName: member.firstName,
//       lastName: member.lastName,
//       dob: member.dob,
//       gender: member.gender,
//       email: member.email,
//       phonenumber:member.phonenumber
//     });
//   }
}
