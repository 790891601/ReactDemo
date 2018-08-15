import React from "react"
import ReactDOM from "react-dom"

export default class Portal extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick() {
        console.log("createPortal传送门事件冒泡")
    }

    render() {
        //console.log(this.props.children) //获取子节点
        return <div className="wrap" onClick={ this.onClick.bind(this) }>
            <Demo child={ this.props.children } />
        </div>
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props)

        this.createContent()
    }

    createContent() {
        const dom = this.dom = document.createElement("div")
        dom.innerHTML = "Hello React!"
        document.body.appendChild(dom)
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.dom)
        document.body.removeChild(this.dom)
        this.dom = null
    }

    render() {
        const  instrtBeforeDOM  =  document.querySelector("#inner")
        const { child } = this.props
        return ReactDOM.createPortal(
            child,
            this.dom
        )
    }
}