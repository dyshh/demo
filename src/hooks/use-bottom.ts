import { useEffect } from 'react'
import { debounce } from '../js/debounce'
// 滚动加载滚到底部翻页
const useBottom = (id: string, action: () => void) => {
    useEffect(() => {
        function doInBottom(e: WheelEvent) {
            const { scrollTop, scrollHeight } = e.target as HTMLDivElement
            if (scrollTop + document.body.clientHeight + 10 > scrollHeight) {
                return action()
            }
        }
        const debounceDoInBottom = debounce((e: WheelEvent) => {
            doInBottom(e)
        }, 300)
        const dom = document.querySelector(`#${id}`)
        if (dom) {
            dom.addEventListener('scroll', debounceDoInBottom)
            return () => {
                dom.removeEventListener('scroll', debounceDoInBottom)
            }
        }
    }, [action, id])
}

export default useBottom
