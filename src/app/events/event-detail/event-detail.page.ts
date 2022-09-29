import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../event.model';
import { EventsService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  loadedEvent: Event;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('eventId')) {
        // redirect
        return;
      }
      const eventId = paramMap.get('eventId');
      this.loadedEvent = this.eventsService.getEvent(eventId);
      console.log(paramMap);
    });
  }
}
