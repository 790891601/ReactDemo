import React from "react"
import "./textarea.less"

export default class Textarea extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value : undefined
        }
    } 

    get el() {
        return this.el_
    }

    onchange(event) {
        const { el } = this

        this.setState({
            value : el.value
        })
    }

    onfocus() {
        const { el } = this
        const { value:defaultValue } = this.props
        
        el.value = el.value === defaultValue ? "" : el.value
    }

    onblur() {
        const { el } = this
        const { value:defaultValue } = this.props
        
        el.value = el.value === "" ? defaultValue : el.value
    }

    render() {
        const { value:defaultValue } = this.props
        const { value } = this.state

        const customeValue = value !== undefined ? value : defaultValue

        return <textarea ref={ el => this.el_ = el } className="textarea-content" 
            onChange={ this.onchange.bind(this) } value={ customeValue } 
            onFocus={ this.onfocus.bind(this) } onBlur={ this.onblur.bind(this) } >{ customeValue }</textarea>
    }
}