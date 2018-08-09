import React from "react"
import PropTypes from "prop-types"
import "./Button.less"

export default class Button extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isMouseDown : false
        }
    }

    static get defaultProps() {
        return {
            click : _ => _, 
            startClass : "",
            text : "",
            children : ""
        }
    }

    static set propTypes(val) {
        return {
            click : PropTypes.func, 
            startClass : PropTypes.string,
            text : PropTypes.string, 
            children : PropTypes.string
        }
    }

    onMouseDown() {
        this.setState({
            isMouseDown : true
        })
    }

    onMouseUp() {
        this.setState({
            isMouseDown : false
        })
    }

    render() {
        const { children, text, click, startClass } = this.props
        const { isMouseDown } = this.state

        const customText = children || text
        const customMouseDownCls = isMouseDown ? "j-btn-down" : ""

        const curomeClassName = `j-btn-default ${startClass} ${customMouseDownCls}`

        // const propertyStyle = {
        //     width : 100,
        //     height : 20,
        //     backgroundColor : "red"
        // }

        return <button onMouseDown={ this.onMouseDown.bind(this) } onMouseUp={ this.onMouseUp.bind(this) } className={ curomeClassName } onClick={ click }>{ customText }</button>
    }
}

