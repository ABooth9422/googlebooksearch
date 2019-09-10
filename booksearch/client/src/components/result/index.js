import React,{Component} from "react"
import ButtonRow from "../buttonRow"
import "./style.css"

class ResultRow extends Component{
    
    state={
        image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2Fdf-04648.jpg&w=400&c=sc&poi=face&q=85"
    }
    
    
    
    render(){
        
    const obj={
        title:this.props.title,
        author:this.props.author,
        description:this.props.description,
        image:this.props.image,
        link:this.props.link

    }
    return(
        <>
        <div id="test"className="container rounded bg-secondary text-white my-3 p-3">
           <div className="row">
            <div className="col-9">
            <p className="mx-2">Title: {this.props.title}</p>
            </div>
            <div className="col-3 d-flex justify-content-end">
            <ButtonRow remove={this.props.remove}arrayPosition={this.props.arrayPosition}searched={this.props.searched} obj={obj}add={this.props.add}id={this.props.id}link={this.props.link ||"/"}save={this.props.save}  view={this.props.view}/>
         </div>
         </div>
         <div className="row mx-2">
            <p>Author: {this.props.author}</p>
            </div>
  
       <div className="row my-2">

       <div className="col-3">
       <img alt="bookImage"width="200px" height="200px"className="mx-2 rounded "src={this.props.image || this.state.image}></img> 
       </div>
        <div className="col-9">
        <p className="mx-5">{this.props.description} </p>
        </div>
           
       
      </div>
            </div>

          
       
     
        
        </>
    )
}
}
export default ResultRow