import { Component, OnInit } from '@angular/core';
import { ShowFeedbackService } from '../shared/showfeedback.service';
import { Feedback } from '../feedback';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit  {

  feedback: any[];
constructor(private showfeedbackService: ShowFeedbackService, db: AngularFireDatabase) {
  db.list("/feedback")
      .valueChanges()
}
feedbackArray :  Feedback[];

  ngOnInit() {
    this.showfeedbackService.getFeedbacks().subscribe(actionArray => {
      this.feedbackArray = actionArray.map(item => {
        return {
          id :item.key,
          ...item.payload.val()
        } as Feedback;
      })
    });
  }
}

