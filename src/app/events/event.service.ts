import { Injectable } from '@angular/core';
import { Event } from './event.model';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private events: Event[] = [
    {
      id: 'e1',
      title: 'Paris Retail Week',
      description:
        "Paris Retail Week réinvente l'expérience business à travers une offre globale pour les experts du e-commerce.",
      imageUrl:
        'https://www.bepub.com/pics/webzine/small/paris-retail-week-le-salon-du-commerce-a-la-pointe-innovation_2021-09-20.jpg',
      price: 149.99,
      availableFrom: new Date('2021-01-01'),
      availableTo: new Date('2021-12-31'),
      conferences: [
        {
          id: 'c1',
          title: 'conf1',
          description: 'In this course, you will learn a programming language!',
          availableFrom: new Date('2021-01-01T03:24:00'),
          availableTo: new Date('2021-12-31T03:24:00'),
          location: 'Online',
          booked: false,
        },
        {
          id: 'c2',
          title: 'conf2',
          description: 'In this course, you will learn a programming language!',
          availableFrom: new Date('2021-01-01T03:24:00'),
          availableTo: new Date('2021-12-31T03:24:00'),
          location: 'salon 3',
          booked: false,
        },
      ],
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description: 'You probably need this course if you are an introvert!',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      price: 99.99,
      availableFrom: new Date('2021-01-01'),
      availableTo: new Date('2021-12-31'),
      conferences: [
        {
          id: 'c1',
          title: 'Programming for everyone',
          description: 'In this course, you will learn a programming language!',
          availableFrom: new Date('2021-01-01T03:24:00'),
          availableTo: new Date('2021-12-31T03:24:00'),
          location: 'sallon 1',
          booked: false,
        },
      ],
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description: 'You probably need this course if you are an extrovert!',
      imageUrl: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
      price: 99.99,
      availableFrom: new Date('2021-01-01'),
      availableTo: new Date('2021-12-31'),
      conferences: [
        {
          id: 'c1',
          title: 'Programming for everyone',
          description: 'In this course, you will learn a programming language!',
          availableFrom: new Date('2021-01-01T03:24:00'),
          availableTo: new Date('2021-12-31T03:24:00'),
          location: 'salon 1',
          booked: false,
        },
        {
          id: 'c2',
          title: 'Programming for everyone',
          description: 'In this course, you will learn a programming language!',
          availableFrom: new Date('2021-01-01T03:24:00'),
          availableTo: new Date('2021-12-31T03:24:00'),
          location: 'salon 2',
          booked: false,
        },
        {
          id: 'c2',
          title: 'Programming for everyone',
          description: 'In this course, you will learn a programming language!',
          availableFrom: new Date('2021-01-01T03:24:00'),
          availableTo: new Date('2021-12-31T03:24:00'),
          location: 'salon 3',
          booked: false,
        },
      ],
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
  setBookedConference(eventId: string, conferenceId: string) {
    const event = this.getEvent(eventId);
    const conference = event.conferences.find((conference) => {
      return conference.id === conferenceId;
    });
    if (conference.booked) {
      conference.booked = false;
    } else {
      conference.booked = true;
    }

    console.log(event.title, conference.title, conference.booked);
  }
}
