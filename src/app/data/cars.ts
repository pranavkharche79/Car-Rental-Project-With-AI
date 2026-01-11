export interface Car {
  id: string;
  name: string;
  brand: string;
  category: 'luxury' | 'suv' | 'sports' | 'electric' | 'economy';
  image: string;
  pricePerDay: number;
  seats: number;
  transmission: 'automatic' | 'manual';
  fuel: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  features: string[];
  rating: number;
  reviews: number;
  available: boolean;
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'Mercedes S-Class',
    brand: 'Mercedes-Benz',
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXJ8ZW58MXx8fHwxNzY4MDg3MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 250,
    seats: 5,
    transmission: 'automatic',
    fuel: 'petrol',
    features: ['GPS', 'Leather Seats', 'Sunroof', 'Premium Sound'],
    rating: 4.9,
    reviews: 128,
    available: true,
  },
  {
    id: '2',
    name: 'Range Rover Sport',
    brand: 'Land Rover',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1587580945215-5d4aabb2c8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzY4MTExNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 200,
    seats: 7,
    transmission: 'automatic',
    fuel: 'diesel',
    features: ['4WD', 'GPS', 'Parking Sensors', 'Bluetooth'],
    rating: 4.8,
    reviews: 95,
    available: true,
  },
  {
    id: '3',
    name: 'Porsche 911',
    brand: 'Porsche',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY4MDExOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 350,
    seats: 2,
    transmission: 'automatic',
    fuel: 'petrol',
    features: ['Sport Mode', 'Premium Sound', 'GPS', 'Leather Seats'],
    rating: 5.0,
    reviews: 67,
    available: true,
  },
  {
    id: '4',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    category: 'electric',
    image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3NjgwNjkyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 180,
    seats: 5,
    transmission: 'automatic',
    fuel: 'electric',
    features: ['Autopilot', 'Supercharging', 'Premium Interior', 'GPS'],
    rating: 4.7,
    reviews: 142,
    available: true,
  },
  {
    id: '5',
    name: 'BMW 7 Series',
    brand: 'BMW',
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXJ8ZW58MXx8fHwxNzY4MDg3MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 220,
    seats: 5,
    transmission: 'automatic',
    fuel: 'hybrid',
    features: ['Massage Seats', 'GPS', 'Parking Assist', 'Night Vision'],
    rating: 4.8,
    reviews: 89,
    available: false,
  },
  {
    id: '6',
    name: 'Toyota Highlander',
    brand: 'Toyota',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1587580945215-5d4aabb2c8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjByZW50YWx8ZW58MXx8fHwxNzY4MTExNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    pricePerDay: 120,
    seats: 7,
    transmission: 'automatic',
    fuel: 'petrol',
    features: ['GPS', 'Bluetooth', 'Backup Camera', 'Climate Control'],
    rating: 4.6,
    reviews: 203,
    available: true,
  },
];
