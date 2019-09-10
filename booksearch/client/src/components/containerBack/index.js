import React from "react"
import "./style.css"

function containerBack(props){
    return(
        <>
    
        <div id="container"className="container rounded my-5 p-3 bg-primary">
            <h1>{props.heading}</h1>
           {props.children}
       </div>
        
        </>
    )
}
export default containerBack