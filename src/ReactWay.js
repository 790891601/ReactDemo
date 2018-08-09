import react from "react"
import reactDOM from "react-dom"
import Button from "./Button/index"
import Input from "./Input/index"

class Model {
    constructor() {
        this.n = 0 
    }

    plusCounter(reactview) {
        this.n++

        reactview.setStateAction()
    }

    reduceCounter(reactview) {
        this.n--

        reactview.setStateAction()
    }
}

class ReactView extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            n : props.model.n
        }
    }

    setStateAction() {
        this.setState({
            n : this.props.model.n
        })
    }

    emitPlusCounter = () => {
        this.props.model.plusCounter(this)
    }

    emitReduceCounter = () => {
        this.props.model.reduceCounter(this)
    }

    render() {
        return <div className="react-content-wrap">
            <p>React模式</p>
            <ButtonGroup
                onPlusClick={ this.emitPlusCounter }
                onReduceClick={ this.emitReduceCounter }
            />
            <InputGroup 
                n={ this.state.n }
            />
        </div>
    }
}

class ButtonGroup extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { onPlusClick, onReduceClick } = this.props

        return <div className="btn-group-wrap">
            <Button startClass="j-btn" click={ onPlusClick }>+1</Button>
            <Button startClass="j-btn2" click={ onReduceClick }>-1</Button>
        </div>
    }
}

class InputGroup extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { n } = this.props

        return <div> 
           <Input val={ n } classname="j-input" />
           <Input val={ n*2 } classname="j-input2" />
        </div>
    }
}


export default function ReactWay() {
    const model = new Model()
    const app = document.querySelector("#app")
    reactDOM.render(<ReactView model={ model } /> , app)
}