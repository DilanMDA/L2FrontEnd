import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-joinedevents-table',
  templateUrl: './joinedevents-table.component.html',
  styleUrls: ['./joinedevents-table.component.css'],
})
export class JoinedeventsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  members;

  constructor(private _memberService:MemberService){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'venue', 'date'];

  ngOnInit() {
    return this._memberService.getJoinedEvents().subscribe(rest=>this.dataSource.data=rest);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
}
