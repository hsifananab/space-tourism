const destinations = [
  {
    id: 0,
    label: 'moon',
    desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 KM',
    time: '3 days',
    image: '/assets/img/destination/image-moon.png',
    path: '/destinations/moon',
  },
  {
    id: 1,
    label: 'mars',
    desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '25 MIL. KM',
    time: '9 months',
    image: '/assets/img/destination/image-mars.png',
    path: '/destinations/mars',
  },
  {
    id: 2,
    label: 'europa',
    desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 MIL. KM',
    time: '3 years',
    image: '/assets/img/destination/image-europa.png',
    path: '/destinations/europa',
  },
  {
    id: 3,
    label: 'titan',
    desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 BIL. KM',
    time: '7 years',
    image: '/assets/img/destination/image-titan.png',
    path: '/destinations/titan',
  },
];

export const getDestinations = () => destinations;

export const getDestination = label =>
  destinations.find(destination => destination.label === label);
