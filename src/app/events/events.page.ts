import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { EventsService } from './event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  events: Event[];
  constructor(private eventsService: EventsService) {}
  onClick() {
    console.log('clicked');
  }
  ngOnInit() {
    this.events = this.eventsService.getAllEvents();
  }
}
