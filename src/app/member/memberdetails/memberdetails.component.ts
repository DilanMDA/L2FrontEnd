import { Component, OnInit} from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-memberdetails',
  template: `
  
  <main-nav></main-nav>
  <div class="memd">
<mat-card-actions align="end">
<mat-card *ngFor="let member of members">Member Id      :   <strong>{{member.id}}</strong> </mat-card>
<mat-card *ngFor="let member of members">First Name     :   {{member.firstname}} </mat-card>
<mat-card *ngFor="let member of members">Last Name      :   {{member.lastname}} </mat-card>
<mat-card *ngFor="let member of members">Date of birth  :   {{member.dob}} </mat-card>
<mat-card *ngFor="let member of members">Gender         :   {{member.gender}} </mat-card>
<mat-card *ngFor="let member of members">Email          :   <strong>{{member.email}}</strong> </mat-card>
<mat-card *ngFor="let member of members">Phone Number   :   {{member.phonenumber}} </mat-card>
<mat-card *ngFor="let member of members">User Name      :   {{member.username}} </mat-card>
</mat-card-actions>  
  
  <h2>Joined Events</h2>
  <app-joinedevents-table></app-joinedevents-table><br>
  <button type="button" class="btn btn-primary btn-block">Request membership report</button><br>
  <button type="button" class="btn btn-primary btn-block" (click)="requestReport()">Request for admin position</button><br>
  
  </div>
  
  `,
  styleUrls: ['./memberdetails.component.css']
})
export class MemberdetailsComponent implements OnInit{

  public members = [];

  

  constructor(private _MemberService: MemberService) {}

  
  ngOnInit() {
     this._MemberService.getMembers()
     .subscribe(data => this.members=data);
  }

}
