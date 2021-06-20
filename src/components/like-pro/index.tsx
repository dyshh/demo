import { useRef, useEffect } from 'react'
import styles from './index.module.scss'
import ThumbImg from './like-thumb.png'
import Animate from './bezier-animate'

export default function LikePro() {
    const animateIns = useRef<InstanceType<typeof Animate>>()
    const bezierBox = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (bezierBox.current) {
            animateIns.current = new Animate({
                box: bezierBox.current
            })
        }
    }, [])

    return (
        <div>
            <div className={styles.box} ref={bezierBox}>
                <img
                    onClick={() => {
                        if (!animateIns.current?.isPlaying) {
                            const cb = div => {
                                div.style.backgroundImage = `url(${ThumbImg})`
                                div.style.backgroundSize = 'cover'
                            }
                            animateIns.current?.create(cb)
                            // animateIns.current?.batchCreate(cb)
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
