import React from 'react'
export default class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.state.num)
            this.setState({ num: this.state.num + 1 })
            console.log(this.state.num)
        }, 0)
    }
    render() {
        return (
            <div
                onClick={() => {
                    this.setState({ num: this.state.num + 1 })
                    console.log(this.state.num)
                }}
            >
                {this.state.num}
            </div>
        )
    }
}
