import reactDOM from "react-dom"
import react from "react"


const container = document.querySelector("#app")

//需求：做一个登录页面：3个input，分别是用户名、密码、登录
class Input extends React.Component {
    render() {
        return <input className={ this.props.className } type={ this.props.type } />
    }
}

class Login extends React.Component {
    render() {
        
        return <div className="loginWrap">
            <form action="" method="POST">
                <Input className="userName" type="text" />
                <Input className="pwd" type="password" />
                <Input className="submitBtn" type="submit" />
            </form>
        </div>
    }
}

reactDOM.render(<Login />, container)