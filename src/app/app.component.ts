import { Component } from '@angular/core';
import { EventRetrieverService } from './event-retriever.service';
import { EventsComponent } from './events/events.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventRetrieverService]
})
export class AppComponent {

  title = 'Zenith Society Events for the Current Week';

}
