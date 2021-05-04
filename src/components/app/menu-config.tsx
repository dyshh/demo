import {
    Drawer,
    Like,
    LikePro,
    PubSub,
    TestMobx,
    TestSetState,
    ResponsiveLayout1,
    ResponsiveLayout2,
    ScrollToBottom
} from '..'

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
    },
    {
        pathname: '/mobx',
        title: 'Mobx Demo',
        component: TestMobx
    },
    { title: '测试' },
    {
        pathname: '/test-set-state',
        title: '测试setState同步异步',
        component: TestSetState
    },
    { title: '布局' },
    {
        pathname: '/responsive-layout-js',
        title: '响应式布局-js实现',
        component: ResponsiveLayout1
    },
    {
        pathname: '/responsive-layout-grid',
        title: '响应式布局-grid实现',
        component: ResponsiveLayout2
    },
    {
        title: 'Hooks'
    },
    {
        pathname: '/scroll-to-bottom',
        title: '滚动翻页',
        component: ScrollToBottom
    }
]
