const debounce = (fn, time) => {
    let timer = null

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, time)
    }
}

export { debounce }
