import styles from './index.module.scss'
import { useScrollPagination } from '../../hooks/use-pagination'

export default function ScrollToBottom() {
    const { list, containerRef } = useScrollPagination<HTMLDivElement>()

    return (
        <div>
            <div ref={containerRef} className={styles.wrapper}>
                {list.map(item => (
                    <div key={item} />
                ))}
            </div>
        </div>
    )
}
