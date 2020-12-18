// import { getHeroById } from 'selectors/getHeroById'
import { heroes } from 'data/heroes';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

describe(`Test fetching hero by ID`, () => {
  const marvelHeroes = getHeroesByPublisher('Marvel Comics');
  const dcHeroes = getHeroesByPublisher('DC Comics');

  test(`should return 10 elements for marvel publisher`, async () => {
    expect(marvelHeroes.length).toBe(10);
    expect(marvelHeroes.length).not.toBe(12);
  });

  test(`should return 10 elements for dc publisher`, async () => {
    expect(dcHeroes.length).toBe(10);
    expect(dcHeroes.length).not.toBe(12);
  });

  test(`total length of heroes must be sum of twice`, () => {
    const sumOfThem = dcHeroes.length + marvelHeroes.length;
    expect(sumOfThem).toBe(heroes.length);
  });
});
