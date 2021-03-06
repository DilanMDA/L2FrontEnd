import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{

  constructor(private feedbackService: FeedbackService){}

  // Get these values from the server
  countries = [
    { name: 'Sri Lanka' },
    { name: 'India' },
    { name: 'America' },
    { name: 'China' },
  ];

  submit(sfeedback){
    this.feedbackService.create(sfeedback);
  }

}
