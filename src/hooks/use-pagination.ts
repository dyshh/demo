import { useState, useEffect } from 'react'
import useBottom from './use-bottom'

interface Query {
    page: number
    size: number
}

// 翻页通用逻辑
export const usePagination = ({
    eleId,
    size = 10,
    fetchApi,
    dependence = []
}: {
    eleId: string
    size?: number
    fetchApi: (query: Query) => Promise<[]>
    dependence?: any[]
}) => {
    // 因为每次是请求下一页数据，所以现在初始页码为: 0
    const [query, setQuery] = useState({ page: 0, size })
    const [list, setList] = useState([]) // 初始列表数据为空数组: []

    const fetchAndSetQuery = () => {
        // 每次请求下一页数据
        const newQuery = {
            ...query,
            page: query.page + 1
        }
        fetchApi(newQuery).then((newList: []) => {
            // 成功后插入新列表数据，并更新最新分页参数
            setList(oldList => [...oldList, ...newList])
            // 滚动加载的触发条件是滚到底部而不是页码变化，可以加载数据后再改页码
            setQuery(newQuery)
        })
    }
    // 首次mount后触发数据请求
    useEffect(fetchAndSetQuery, dependence)
    // 滚动到底部触发数据请求
    useBottom(eleId, fetchAndSetQuery)

    return [list]
}
