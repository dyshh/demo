import { useState, useEffect, useCallback } from 'react'

export default function useWindowResize() {
    const isClient = typeof window === 'object'

    const getSize = useCallback(() => {
        return {
            width: isClient ? window.innerWidth : 0,
            height: isClient ? window.innerHeight : 0
        }
    }, [isClient])

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        if (!isClient) {
            return
        }

        function handleResize() {
            setWindowSize(getSize())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isClient, getSize])

    return windowSize
}
