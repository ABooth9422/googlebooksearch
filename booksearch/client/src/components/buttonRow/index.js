import React,{Component} from "react"
import "./style.css"


class ButtonRow extends Component{


    

    render(){
        let button
        console.log(this.props.obj)
        if(this.props.searched){
            button=
            <button type="button"onClick={()=>this.props.add(this.props.obj,this.props.arrayPosition)} id={this.props.id} className="btn btn-warning">{this.props.save}</button>
        }else{
            button=
            <button type="button" id={this.props.id} onClick={()=>this.props.remove(this.props.id,this.props.arrayPosition)}className="btn btn-warning">Remove</button>

        }
    
    return(
        <>
        <a target="_blank" rel="noopener noreferrer"href={this.props.link}><button type="button" className="btn btn-danger mx-2">{this.props.view}</button></a>
        
        {button}
        </>
    )
}
}

    export default ButtonRow