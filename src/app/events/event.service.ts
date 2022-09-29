import { Injectable } from '@angular/core';
import { Event } from './event.model';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private events: Event[] = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description: 'In this course, you will learn a programming language!',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      price: 149.99,
      availableFrom: new Date('2021-01-01'),
      availableTo: new Date('2021-12-31'),
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description: 'You probably need this course if you are an introvert!',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      price: 99.99,
      availableFrom: new Date('2021-01-01'),
      availableTo: new Date('2021-12-31'),
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description: 'You probably need this course if you are an extrovert!',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      price: 99.99,
      availableFrom: new Date('2021-01-01'),
      availableTo: new Date('2021-12-31'),
    },
  ];
  constructor() {}
  getAllEvents() {
    return [...this.events];
  }
  getEvent(eventId: string) {
    return {
      ...this.events.find((event) => {
        return event.id === eventId;
      }),
    };
  }
}
