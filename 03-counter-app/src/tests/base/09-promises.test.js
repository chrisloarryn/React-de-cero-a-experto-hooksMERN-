import { getHeroByIdAsync } from './../../base/09-promises'
import heroes from './../../data/heroes'

describe('Promises tests', () => {
  test('getHeroByIdAsync should return an hero async', done => {
    const id = 1
    getHeroByIdAsync(id).then(hero => {
      expect(hero).toBe(heroes[0])
      done()
    })
  })
  test('getHeroByIdAsync should return an error if hero does not exists', done => {
    const id = 10
    getHeroByIdAsync(id).catch(err => {
      expect(err).toBe('Hero could not be found!')
      done()
    })
  })
})
