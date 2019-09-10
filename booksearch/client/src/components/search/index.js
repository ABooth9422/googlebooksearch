import React,{Component} from "react"

import "./style.css"

class Search extends Component{

    
    render(){

    return(
        <>
   
        <form>
        <div className="form-group bg-secondary p-5 rounded">
            <label className="text-white">Book Search</label>
            <input onChange={this.props.onChange}type="text" className="form-control mb-2" id="searchBar"  placeholder="enter book to search for"/>
            
            <button type="submit" onClick={this.props.onClick}id="searchSubmit" className="btn btn-primary">Submit</button>
        </div>
        
        </form>
        
        </>
    )
}
}
export default Search