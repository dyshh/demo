import { autorun, observable } from '../../js/mobx'

export default function Demo() {
    const store = observable({ a: 1, b: { c: 1 } })
    autorun(() => {
        if (store.a === 2) {
            console.log(store.b.c)
        }
    })
    store.a = 2
    store.b.c = 5
    store.b.c = 6
    return <div>forever</div>
}