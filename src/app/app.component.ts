import { Component } from '@angular/core';
import { EventRetrieverService } from './event-retriever.service';
import { Event } from './event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventRetrieverService]
})
export class AppComponent {

  title = 'app works!';
  
}
