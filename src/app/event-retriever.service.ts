import { Injectable } from '@angular/core';
import { Event } from './event';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventRetrieverService {

  constructor(private http: Http) { }

  private BASE_URL = "http://zenithwebsiteasn2.azurewebsites.net/api/events";
  //private BASE_URL = "http://localhost:5000/api/events";

  getEvents(): Promise<Event[]> {
  return this.http.get(this.BASE_URL)
   .toPromise()
   .then(response => response.json() as Event[])
   .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
