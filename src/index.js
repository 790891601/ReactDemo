// import reactBoneWay from "./reactBoneWay"
// reactBoneWay()

// import ReactWay from "./ReactWay" 

// ReactWay()
 
import ReactDOM from "react-dom"
// import CreatePortal from "./createPortal"

const app = document.querySelector("#app")

// ReactDOM.render(
//     <CreatePortal>
//         <span>Node1</span>
//         <span>Node2</span>
//     </CreatePortal>
// , app)

import Select from "./Select/index"

ReactDOM.render(<Select text="select menu" />, app) 

