import styles from './index.module.scss'
import Demo1 from './demo-1'
import Demo2 from './demo-2'

export default function drawer() {
    return (
        <div className={styles.wrapper}>
            <Demo1 />
            <Demo2 />
        </div>
    )
}
