import { ICar } from 'types/types';
import car1 from 'assets/car-1.webp';
import car2 from 'assets/car-2.webp';
import car3 from 'assets/car-3.webp';
import car4 from 'assets/car-4.webp';

const carImages: Record<number, string> = { 1: car1, 2: car2, 3: car3, 4: car4 };

export const cars: ICar[] = [
  {
    id: 1,
    imageUrl: carImages[1],
    type: '',
    modelName: 'Mini Cooper',
    mileage: 132,
    costPerHour: 32,
    backgroundColor: 'warning.lighter',
  },
  {
    id: 2,
    type: '',
    imageUrl: carImages[2],
    modelName: 'Ford K',
    mileage: 130,
    costPerHour: 28,
    backgroundColor: 'primary.lighter',
  },
  {
    id: 3,
    type: '',
    imageUrl: carImages[3],
    modelName: 'Picapes',
    mileage: 130,
    costPerHour: 28,
    backgroundColor: 'error.lighter',
  },
  {
    id: 4,
    type: '',
    imageUrl: carImages[4],
    modelName: 'Uno Mille',
    mileage: 180,
    costPerHour: 8,
    backgroundColor: 'error.lighter',
  },
];
