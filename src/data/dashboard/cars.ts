import { ICar } from 'types/types';
import car1 from 'assets/car-8.webp';
import car2 from 'assets/car-7.webp';
import car3 from 'assets/car-6.webp';
import car4 from 'assets/car-5.webp';

const carImages: Record<number, string> = { 1: car1, 2: car2, 3: car3, 4: car4 };

export const cars: ICar[] = [
  {
    id: 1,
    imageUrl: carImages[1],
    type: 'Sedan',
    modelName: 'Voyage',
    mileage: 132,
    costPerHour: 1,
    backgroundColor: 'warning.lighter',
  },
  {
    id: 2,
    type: 'Hatch',
    imageUrl: carImages[2],
    modelName: 'Polo',
    mileage: 130,
    costPerHour: 1,
    backgroundColor: 'primary.lighter',
  },
  {
    id: 3,
    type: 'Picapes',
    imageUrl: carImages[3],
    modelName: 'Hilux',
    mileage: 130,
    costPerHour: 3,
    backgroundColor: 'error.lighter',
  },
  {
    id: 4,
    type: `Suv`,
    imageUrl: carImages[4],
    modelName: 'Duster',
    mileage: 800,
    costPerHour: 2,
    backgroundColor: 'error.',
  },
];
