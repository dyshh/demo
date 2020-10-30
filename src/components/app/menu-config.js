import { Drawer, Like, LikePro, PubSub } from '../../components'

export const menus = [
    {
        pathname: '/',
        title: '概述',
        exact: true,
        style: {
            marginBottom: 10
        },
        render: () => {
            return <div>跑一些值得研究和记录的demo，供学习使用</div>
        }
    },
    {
        title: '动画'
    },
    {
        pathname: '/drawer',
        title: '抽屉',
        component: Drawer
    },
    {
        pathname: '/like',
        title: 'Like',
        component: Like
    },
    {
        pathname: '/like-pro',
        title: 'LikePro',
        component: LikePro
    },
    {
        title: '设计模式'
    },
    {
        pathname: '/pub-sub',
        title: '发布/订阅',
        component: PubSub
    }
]
