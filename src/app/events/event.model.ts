interface conferecesItem {
  id: string;
  title: string;
  description: string;
  availableFrom: Date;
  availableTo: Date;
  location: string;
  booked: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  availableFrom: Date;
  availableTo: Date;
  conferences: conferecesItem[];
}
