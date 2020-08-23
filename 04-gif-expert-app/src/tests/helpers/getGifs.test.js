import { getGifs } from './../../helpers/getGifs'

describe(`Test fetching getGifs`, () => {

    test('should return 10 elements', async () => {
        const gifs = await getGifs('One Punch')
        expect( gifs.length ).toBe(10)
        expect(gifs.length).not.toBe(12)
    })

    test('should return 0 elements', async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })

})