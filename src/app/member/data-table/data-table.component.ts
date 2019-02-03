import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MemberService } from '../member.service';
import { JoinEvents } from '../joinEvents';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  joinevent: JoinEvents=new JoinEvents();

  displayedColumns = ['id', 'name', 'venue', 'date','button'];
  dataSource = new MatTableDataSource();
  members;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _memberService:MemberService) {}

  ngOnInit(){
    return this._memberService.getEvents().subscribe(rest=>this.dataSource.data=rest);
  }

  createJoinEvent():void{
    this._memberService.createJoinEvent(this.joinevent)
    .subscribe(data=>{
      alert('Joined to the Event');
    });
  }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}