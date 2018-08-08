import PropTypes from "prop-types"

export default class Input extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        const { val, classname } = this.props
        return <input type="text" value={ val } className={ classname } />
    }
} 