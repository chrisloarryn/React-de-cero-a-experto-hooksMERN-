import '@testing-library/jest-dom'
import { sayHello } from '../../base/02-template-string'

describe('Tests in file 02-template-string.test.js', () => {
  test('sayHello method should return Hello Peter', () => {
    const name = 'Peter'
    const result = sayHello(name)
    expect(result).toBe(`Hello ${name}!`)
  })

  // sayHello should return 'Hello Rick' if there is no name argument
  test('sayHello method should return Hello Rick if there is no name argument', () => {
      name = 'Rick'
      const result = sayHello()
      expect(result).toBe(`Hello ${name}!`)
  });
})
