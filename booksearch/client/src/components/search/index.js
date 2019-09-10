import React,{Component} from "react"
import "./style.css"

class Search extends Component{

    submit=(e)=>{
        e.preventDefault()
        console.log("clicked")
    }
    
    render(){

    return(
        <>
   
        <form>
        <div className="form-group bg-secondary p-5 rounded">
            <label className="text-white"for="searchBar">Book Search</label>
            <input type="text" class="form-control mb-2" id="searchBar"  placeholder="enter book to search for"/>
            
            <button type="submit" onClick={(e)=>(this.submit(e))}id="searchSubmit" className="btn btn-primary">Submit</button>
        </div>
        
        </form>
        
        </>
    )
}
}
export default Search