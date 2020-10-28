import { useState } from 'react'
import classnames from 'classnames'

import styles from './index.module.scss'

export default function Like() {
    const [flag, setFlag] = useState(false)
    const [flag1, setFlag1] = useState(false)
    return (
        <div className={styles.wrapper}>
            <span
                onClick={() => setFlag(!flag)}
                className={classnames(styles.like, styles.heart, flag && styles.animate)}
            />

            <span
                onClick={() => setFlag1(!flag1)}
                className={classnames(styles.like, styles.thumb, flag1 && styles.animate)}
            />
        </div>
    )
}
