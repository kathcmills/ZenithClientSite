import { Component, OnInit } from '@angular/core';
import { Activity } from 'app/activity';
import { EventRetrieverService } from '../event-retriever.service';
import { Event } from '../event';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventRetrieverService]
})
export class EventsComponent implements OnInit {

  ngOnInit() {
    this.today = new Date();
    this.weekStart = new Date(this.today.setDate(this.today.getDate() - this.today.getDay()));;
    this.weekEnd = new Date(this.today.setDate(this.today.getDate() - this.today.getDay()+6));
    this.getEventsForWeek();
  }

  today : Date;
  weekStart : Date;
  weekEnd : Date;
  eventsForWeek : Array<Event>;

  constructor(private eventRetriever: EventRetrieverService) {

  }
  
  getEventsForWeek() : void {
    this.eventRetriever.getEvents()
    .then(events => this.eventsForWeek = events.filter(
      ev => {return (ev.EventFrom > this.weekStart) && (ev.EventFrom < this.weekEnd);}
      ));
  }

}
