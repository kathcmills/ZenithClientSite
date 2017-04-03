import { Component, OnInit } from '@angular/core';
import { Activity } from 'app/activity';
import { EventRetrieverService } from '../event-retriever.service';
import { Event } from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventRetrieverService]
})
export class EventsComponent implements OnInit {

  ngOnInit() {
    this.getEventsForWeek();
  }

  eventsForWeek : Event[];

  constructor(private eventRetriever: EventRetrieverService) {

  }

  getEventsForWeek() : void {
    this.eventRetriever.getEventsForWeek().then(events => this.eventsForWeek = events);
  }

}
