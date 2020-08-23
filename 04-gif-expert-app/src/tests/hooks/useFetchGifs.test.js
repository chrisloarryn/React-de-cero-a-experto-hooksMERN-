import { renderHook } from '@testing-library/react-hooks'

import { useFetchGifs } from './../../hooks/useFetchGifs'


describe(`Test in hook useFetchGifs`, () => {

    const category = 'One Piece'

    test(`should return initial state`, () => {

        const { result } = renderHook(() => useFetchGifs(category))
        const { data:images, loading } = result.current
        
        expect(images).toEqual([])
        expect(loading).toBe(true)
    })

})