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
        const t = this.el_.value;

        if(t && t.length > 5) {
            console.log("太长了")
            return 
        }

        this.setState({
            val : t
        })
    }

    render() {
        const { classname, val:defaultVal } = this.props
        const { val } = this.state

        const customCls = `Input-default ${classname}`

        return <input ref={ el => { this.el_ = el } } type="text" 
            onChange={ this.onChange.bind(this) } 
            value={ val }  className={ customCls } />
    }
} 