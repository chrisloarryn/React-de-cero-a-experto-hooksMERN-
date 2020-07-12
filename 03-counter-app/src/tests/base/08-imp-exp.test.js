import { getHeroById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Tests in heroes functions', () => {
  test('should return an hero by Id', () => {
    const id = 1
    const hero = getHeroById(id)
    const heroData = heroes.find(el => el.id === id)
    expect(hero).toEqual(heroData)
  })
  test('should return undefined if hero does not exists', () => {
    const id = 10
    const hero = getHeroById(id)
    expect(hero).toBe(undefined)
  })
  test('should return array with heroes of DC', () => {
    const owner = 'DC'
    const heroesByOwner = getHeroesByOwner(owner)

    const heroesData = heroes.filter(el => el.owner === owner)
    expect(heroesByOwner).toEqual(heroesData)
  })
  test('should return quantity of MARVEL heroes', () => {
    const owner = 'Marvel'
    const heroesByOwner = getHeroesByOwner(owner)
    expect(heroesByOwner.length).toBe(2)
  })
})
