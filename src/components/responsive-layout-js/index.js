import { useState, useEffect } from 'react'

import styles from './index.module.scss'

const mockArr = Array.from(Array(50), (v, k) => k)

export default function Layout() {
    const { width: clientWidth } = useWindowSize()
    const containerWidth = clientWidth - 225
    const width = useAutoFix(containerWidth, 150, 20)
    const height = 0.8 * width
    const style = {
        width: `${width}px`,
        height: `${height}px`
    }
    return (
        <div className={styles.wrapper}>
            {mockArr.map(item => (
                <div key={item} className={styles.item} style={style}></div>
            ))}
        </div>
    )
}

function useAutoFix(containerWidth, defaultWidth, margin) {
    const num = Math.floor(containerWidth / defaultWidth)
    const width = (containerWidth - num * margin) / num
    return width
}

function useWindowSize() {
    const isClient = typeof window === 'object'

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        }
    }

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
    }, [])

    return windowSize
}
