import { useState, useEffect, useRef } from 'react'

export const useFetch = url => {
  const isMounted = useRef(true)
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  })
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])
  useEffect(() => {
    setState({ data: null, loading: true, error: null })
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setTimeout(() => {
          if (isMounted.current)
            setState({
              loading: false,
              error: null,
              data
            })
          else console.log('setState() did not called')
        }, 1000)
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'data has not been charged'
        })
      })
  }, [url])

  return state
}
