import React from "react"
import "./style.css"


function Container(props){
    return(
       <div id="container"className="container rounded my-5 p-5 bg-dark">
           {props.children}
       </div>
    )
}
export default Container