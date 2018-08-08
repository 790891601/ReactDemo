// import reactBoneWay from "./reactBoneWay"
// reactBoneWay()

import react from "react"
import reactDOM from "react-dom"

class ReactWay extends react.Component{
    constructor(props) {
        super(props)

        this.state = {
            n : 1
        }
    }

    timer() {
        // this.state.n = 2

        // 渲染页面render
        this.setState(_ => {
            console.log("异步")
        })
    }

    componentDidMount() {
        this.timer()

        console.log("同步")
    }

    render() {
        console.log("render")

        return <div>{ this.state.n }</div>   
    }
}

reactDOM.render(<ReactWay />, document.querySelector("#app"))