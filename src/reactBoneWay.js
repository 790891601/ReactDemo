import reactDOM from "react-dom"
import react from "react"

const container = document.querySelector("#app")  //找到容器

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

// 需求：实现按钮+1,-1
class ReactView extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            n : props.model.n
        }

        console.log(1 ,"constructor")
    }

    setStateAction() {
        this.setState({
            n : this.props.model.n
        })
    }

    componentWillMount() {
        console.log(2 ,"componentWillMount")
    }

    componentDidMount() {
        console.log(3 ,"componentDidMount")     
    }

    componentWillUnmount() {
        console.log(6 ,"componentWillUnmount")
    }

    componentDidCatch() {
        console.log(8, "componentDidCatch")
    }

    componentWillReceiveProps() {
        console.log(9, "componentWillReceiveProps")
    }

    componentWillUpdate() {
        console.log(4 ,"componentWillUpdate")
    }

    componentDidUpdate() {
        console.log(5 ,"componentDidUpdate")
    }

    //是否更新
    shouldComponentUpdate() {
        console.log(7, "shouldComponentUpdate")

        return true
    }

    emitPlusCounter() {
        this.props.model.plusCounter(this)
    }

    emitReduceCounter() {
        this.props.model.reduceCounter(this)
    }

    render() {
        console.log("render")
        
        return <div className="react-content-wrap">
            <p>React模式</p>
            <input type="button" className="j-btn" value="+1" onClick={ this.emitPlusCounter.bind(this) } /> 
            <input type="text" className="j-input" name="" id="" value={ this.state.n } />
            <input type="text" className="j-input2" name="" id="" value={ this.state.n * 2} />
            <input type="button" className="j-btn2" value="-1" onClick={ this.emitReduceCounter.bind(this) } /> 
        </div>
    }    
}

export default function reactWay() {
    const model = new Model()

    reactDOM.render(<ReactView model={ model } />, container)

    //reactDOM.unmountComponentAtNode(container)
}