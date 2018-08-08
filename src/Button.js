import React from "react"
import PropTypes from "prop-types"

export default class Button extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        const { children, text, click, startClass } = this.props

        const customText = children || text
        const curomeClassName = `j-btn-default ${startClass}`

        const propertyStyle = {
            width : 100,
            height : 20,
            backgroundColor : "red"
        }

        return <button className={ curomeClassName } onClick={ click }>{ customText }</button>
    }
}

