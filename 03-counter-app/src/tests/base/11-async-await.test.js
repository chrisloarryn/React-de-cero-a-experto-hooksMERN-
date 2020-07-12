import { getImage } from '../../base/11-async-await'

describe('Tests with async-await and fetch', () => {
  test('getImage should return the url of an image', async () => {
    const url = await getImage()
    // console.log(url)
    expect(url.includes('https://')).toBe(true)
  })
})
