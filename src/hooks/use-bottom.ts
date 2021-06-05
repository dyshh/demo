import { useEffect } from 'react'
import { debounce } from '@pky/fe-utils'

// 滚动加载滚到底部翻页
const useBottom = (domRef: React.MutableRefObject<HTMLElement | null>, action: () => void) => {
    useEffect(() => {
        function doInBottom(e: WheelEvent) {
            const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement
            if (scrollTop + clientHeight + 10 > scrollHeight) {
                return action()
            }
        }
        const debounceDoInBottom = debounce((e: WheelEvent) => {
            doInBottom(e)
        }, 300)
        const dom = domRef.current
        if (dom) {
            dom.addEventListener('scroll', debounceDoInBottom)
            return () => {
                dom?.removeEventListener('scroll', debounceDoInBottom)
            }
        }
    }, [action, domRef])
}

export default useBottom
