// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes'

// console.log( data );

export const getHeroById = id => heroes.find(hero => hero.id === id)

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = owner =>
  heroes.filter(hero => hero.owner === owner)

// console.log( getHeroesByOwner('Marvel') );
