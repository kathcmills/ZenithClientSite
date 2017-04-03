/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventRetrieverService } from './event-retriever.service';

describe('EventRetrieverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRetrieverService]
    });
  });

  it('should ...', inject([EventRetrieverService], (service: EventRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
