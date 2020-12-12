import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard/index';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className='row row-cols-3'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
