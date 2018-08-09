import PropTypes from "prop-types"
import "./Input.less"

export default class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            val : 0
        }
    } 

    static get defaultProps() {
        return {
            val : "",
            classname : "" 
        }
    }

    static set propTypes(val) {
        return {
            val : PropTypes.string, 
            classname : PropTypes.string
        }
    }

    onChange(event) {
        // console.log(event.nativeEvent)

        if(this.el_.value.length > 2) {
            console.log("太长了")
            // event.preventDefault()
            return 
        }

        this.setState({
            val : event.nativeEvent.data
        })
    }

    render() {
        const { classname } = this.props
        const { val } = this.state

        const customCls = `Input-default ${classname}`

        return <input ref={ el => { this.el_ = el } } type="text" onChange={ this.onChange.bind(this) } defaultValue={ val } className={ customCls } />
    }
} 