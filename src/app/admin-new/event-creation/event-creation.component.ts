import { Component, OnInit } from "@angular/core";
import{ EventService} from "../event.service";
import { FormControl } from "@angular/forms";
import { Event } from "../event";

@Component({
  selector: "app-event-creation",
  templateUrl: "./event-creation.component.html",
  styleUrls: ["./event-creation.component.css"]
})
export class EventCreationComponent implements OnInit {
  // name = new FormControl("");
  // event: Event = new Event();
  // submitted = false;
  // constructor(private eventService: EventService) {}
  event: Event = new Event();
  constructor(private eventService: EventService) {

  }
  
  ngOnInit() {}

  onSubmit() {
    this.eventService.createEvent(this.event).subscribe(data => {
      alert("Event created successfuly.");
    })
  }


  // newEvent(): void {
  //   this.submitted = false;
  //   this.event = new Event();
  // }
 
//   save() {
//     this.eventService.EventCreation (this.event)
//       .subscribe(data => console.log(data), error => console.log(error));
//     this.event = new event();
//   }
 
//   onSubmit() {
//     this.submitted = true;
//     this.save();
//   }
// 
}




