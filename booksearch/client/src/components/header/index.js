import React,{Component} from "react"
import "./style.css"

class Header extends Component{
   


    render(){
    return(
        <>
        <div className="jumbotron bg-secondary text-white">
        <h1 className="display-4 text-center">React Google Books Search</h1>
        <hr className="my-4"/>
        <h1 className="display-4">Search for and Save Books of Interest</h1>
        </div>
      </>
    )
    }
            
}
export default Header