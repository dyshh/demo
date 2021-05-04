import styles from './index.module.scss'
import useBottom from '../../hooks/use-bottom'
import { useState, useRef, useCallback } from 'react'

export default function ScrollToBottom() {
    const [list, setList] = useState([1, 2, 3, 4, 5])
    const container = useRef<HTMLDivElement | null>(null)
    const loadNextPage = useCallback(() => {
        const nextPageList = Array.from(Array(5), (_, index) => index + list.length + 1)
        setList([...list, ...nextPageList])
    }, [list])

    useBottom(container, loadNextPage)
    return (
        <div>
            <div ref={container} className={styles.wrapper}>
                {list.map(item => (
                    <div key={item} />
                ))}
            </div>
        </div>
    )
}
