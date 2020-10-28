import { Transition, Animate } from '../../components'

export const menus = [
    {
        pathname: '/',
        title: '首页',
        exact: true,
        component: Transition
    },
    {
        pathname: '/transition',
        title: '过渡',
        component: Transition
    },
    {
        pathname: '/animate',
        title: '动画',
        component: Animate
    }
]
