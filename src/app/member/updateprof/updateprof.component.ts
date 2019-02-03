import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Member } from '../member';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-updateprof',
  templateUrl: './updateprof.component.html',
  styleUrls: ['./updateprof.component.css']
})
export class UpdateprofComponent implements OnInit {
  
  member:Member=new Member();
  
  constructor(private MemberService: MemberService) { }

  onSubmit(){
    this.MemberService.updateMember(this.member)
    .subscribe(data=>{
      alert('member updated successfully');
    })
  }

  ngOnInit() {}

}
