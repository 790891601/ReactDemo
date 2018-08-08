import reactDOM from "react-dom"
import react from "react"

//第一种方式
function Hi(props) {
    return <p>hi,{ props.name }</p>
}

//第二种方式
class Say extends react.Component {
    render() {
        return <p>{ this.props.name },sayhi</p>        
    }
}

function Concat(props) {
    return <div>
        <Say name="丹尼" />
        <Say name="肖比报" />
        <Say name="天一" />
    </div>
}

class Concat2 {
    render() {
        return <div>
            <Hi name="丹尼" />
            <Hi name="肖比报" />
            <Hi name="天一" />
        </div>
    }
}

const container = document.querySelector("#app")

reactDOM.render(res, container, function() {
    console.log("ok")
})

const el = <Hi name="小明" />   //返回一个symbol类型的组件对象
const el2 = <Say name="tom" />
const res = <div>{el} {el2}</div>  //组合组件


console.log(el)  
console.log(el2)