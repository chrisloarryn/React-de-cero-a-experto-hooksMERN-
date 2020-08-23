import { renderHook } from '@testing-library/react-hooks'

import { useFetchGifs } from './../../hooks/useFetchGifs'


describe(`Test in hook useFetchGifs`, () => {

    const category = 'One Piece'

    test(`should return initial state`, async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category))
        const { data:images, loading } = result.current
        
        await waitForNextUpdate()

        expect(images).toEqual([])
        expect(loading).toBe(true)
    })

    test(`should return an Array of imgs and 'loading' in false`, async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category))
        await waitForNextUpdate()

        const { data:images, loading } = result.current

        expect(images.length).toBe(10)
        expect(loading).toBe(false)

    })

})