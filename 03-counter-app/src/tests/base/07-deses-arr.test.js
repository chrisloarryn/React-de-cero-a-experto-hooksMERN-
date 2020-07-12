import { returnArray } from '../../base/07-deses-arr'

describe('Tests in object destruct', () => {
  test('should return an array with a string and a number', () => {
    const [letters, numbers] = returnArray()
    // const arr = returnArray()
    expect(letters).toBe('ABC')
    expect(typeof letters).toBe('string')
    expect(numbers).toBe(123)
    expect(typeof numbers).toBe('number')
  })
})
