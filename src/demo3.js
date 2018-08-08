import reactDOM from "react-dom"
import react from "react"

const container = document.querySelector("#app")  //找到容器

//需求：获取当前时间
// class GetTime extends react.Component {
//     render() {
//         return <div>
//             { new Date().toDateString() } <br />
//             { new Date().getHours() }:{ new Date().getMinutes() }:{ new Date().getSeconds() } 
//         </div>
//     }
// }

// function Timeout() {
//     reactDOM.render(<GetTime />, container)
// }

// setInterval(Timeout)

class GetTime extends react.Component {
    constructor(props) {
        super(props)
        this.state = { date : new Date() }
    }

    //挂载生命周期钩子
    componentDidMount() {
        this.timerID = setInterval(_ => {
            this.tick()
        }, 1000)
    }

    //卸载生命周期钩子
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date : new Date()
        })
    }

    render() {
        return <div>
            { this.state.date.toString() }
        </div>
    }
}

const el = <GetTime />

reactDOM.render(el, container)