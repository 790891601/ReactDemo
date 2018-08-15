import React from "react"
import ReactDOM from "react-dom"
import "./Select.less"

export default class Select extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            showing : false,
            text : undefined
        }
    }

    componentDidMount() {
        this.createDropContentWrap() 
        console.log("mount")
    }

    componentWillUnmount() {
        document.removeChild(this.dom)
        ReactDOM.unmountComponentAtNode(this.dom)
        delete this.dom
    }

    createDropContentWrap() {
        const dom = this.dom = document.createElement("div")
        dom.className = "drop-content-wrap"
        document.body.appendChild(dom)
    }

    drop() {
        const { dom } = this
        const { showing } = this.state
        const style = {
            display : showing ? "block" : "none"
        }
        return ReactDOM.createPortal(<DropGroup onoption={ this.onOption.bind(this) } style={ style } />, dom)
    }

    ondrop() {
        const { showing } = this.state
        this.setState({
            showing : !showing
        })
    }

    onOption(val) {
        this.ondrop()
        this.setState({
            text : val
        })
    }

    render() {
        console.log("render")
        const { text:propsText } = this.props
        const { showing, text } = this.state

        const customeText = text ? text : propsText
         
        const imgURL = showing ? "../assets/fold.svg" : "../assets/unfold.svg" 

        return <div className="main-content-wrap">
            <div className="select-main">
                <div className="left-text">
                    { customeText }
                </div>
                <div className="right-btn" onClick={ this.ondrop.bind(this) }>
                    <img src={ imgURL } />
                </div>
            </div>
            { showing ? this.drop() : null }
        </div>
    }
}

class DropGroup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { text, onoption, style } = this.props
        return <div className="drop-content" style={ style }>
            <Drop text="hello select." onoption={ onoption } />
            <Drop text="hello select2." onoption={ onoption } />
            <Drop text="hello select3." onoption={ onoption } />
            <Drop text="hello select4." onoption={ onoption } />
        </div>
    }
}

class Drop extends React.Component {
    constructor(props) {
        super(props)
    }

    get root() {
        return this.root_
    }

    onOption() {
        const { onoption } = this.props
        const { root } = this
        onoption(root.innerHTML)
    }

    render() {
        const { text } = this.props
        return <div ref={ el => this.root_ = el } className="drop-wrap" onClick={ this.onOption.bind(this) } >{ text }</div>
    }
}