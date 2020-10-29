import { useRef, useEffect } from 'react'
import styles from './index.module.scss'
import ThumbImg from './like-thumb.png'
import Animate from './bezier-animate'

export default function LikePro() {
    const animateIns = useRef(null)
    const bezierBox = useRef(null)

    useEffect(() => {
        animateIns.current = new Animate({
            box: bezierBox.current
        })
    }, [])

    return (
        <div>
            <div className={styles.box} ref={bezierBox}>
                <img
                    onClick={() => {
                        if (!animateIns.current.isPlaying) {
                            animateIns.current.batchCreate(div => {
                                div.style.backgroundImage = `url(${ThumbImg})`
                                div.style.backgroundSize = 'cover'
                            })
                        }
                    }}
                    src={ThumbImg}
                    alt=""
                    width="30"
                />
            </div>
        </div>
    )
}
