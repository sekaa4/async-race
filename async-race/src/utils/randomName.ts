export default function randomName(): string {
  const models: string[] = [
    'Tesla',
    'BMW',
    'Toyota',
    'Porshe',
    'Aston Martin',
    'Opel',
    'Audi',
    'KIA',
    'Honda',
    'Ferrari',
    'Nissan',
    'Lada',
    'Reno',
    'Geely',
  ];
  const names: string[] = [
    'Atlas',
    'Vesta',
    'Corsa',
    'Camry',
    'Cayene',
    'RIO',
    'Q3',
    'Q4',
    'Q5',
    'Almera',
    'Logan',
    'M5',
    'M3',
    'Ceed',
    'Civic',
    'Model S',
    'Emgrand',
  ];

  const randomModel = models[Math.floor(Math.random() * models.length)];
  const randomModelName = names[Math.floor(Math.random() * names.length)];

  return `${randomModel} ${randomModelName}`;
}
