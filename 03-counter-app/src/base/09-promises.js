import { getHeroById } from './08-imp-exp'

export const getHeroByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Homework
      // import the
      const p1 = getHeroById(id)
      if (p1) {
        resolve(p1)
      } else {
        reject('Hero could not be found!')
      }
    }, 1500)
  })
}