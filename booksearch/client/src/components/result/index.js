import React,{Component} from "react"
import "./style.css"

class ResultRow extends Component{
    
    state={
        image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2Fdf-04648.jpg&w=400&c=sc&poi=face&q=85"
    }
    
    
    
    render(){

    
    return(
        <>
        <div id="test"className="container rounded bg-secondary text-white p-3">
           <div className="row">
            <div className="col-9">
            <p className="mx-2">Harry potters nuts</p>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <button type="button" className="btn btn-danger mx-2">View</button>
              <button type="button" className="btn btn-warning">Save</button>
         </div>
         </div>
         <div className="row mx-2">
            <p>He still sucks nuts</p>
            </div>
            <div className="row mx-2">
            <p>Author of nuts</p>
            </div>
       <div className="row">

       <div className="col-3">
       <img width="300px" height="200px"className="mx-2 rounded float-left"src={this.state.image}></img> 
       </div>
        <div className="col-9">
        <p className="mx-5 p-5">Paragraph </p>
        </div>
           
       
      </div>
            </div>

          
       
     
        
        </>
    )
}
}
export default ResultRow