import { Transition, Like } from '../../components'

export const menus = [
    {
        pathname: '/',
        title: '首页',
        exact: true
    },
    {
        pathname: '/transition',
        title: '过渡',
        component: Transition
    },
    {
        pathname: '/like',
        title: 'Like',
        component: Like
    }
]
