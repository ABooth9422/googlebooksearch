import React, { Component } from "react";
import Nav from "../components/nav"
import Container from "../components/container"
import Header from "../components/header"
import ResultRow from "../components/result"
import ContainerBack from "../components/containerBack"
import Search from "../components/search"
import API from "../utils/API";



class Searched extends Component {
 
  state={
    search:"",
    results:[],
    saved:""

}

add=(book,i)=>{
 
  API.saveBook(book,(cb)=>{
   //console.log(cb)
  })
  const newArray= this.state.results.filter((val, index)=>{
    return index !== i;
  })
  
  newArray.slice(i,i+1)
  this.setState({results:newArray})

}

input=(e)=>{
    this.setState({search:e.target.value})
}

submit=(e)=>{
    e.preventDefault()
   
    API.searchBook(this.state.search,(response)=>{
        this.setState({results:response.data.items})
    })
}


  render(){
    const resultArray= this.state.results
    return(
      <>
      <Nav/>
      <Container>
      <Header/>
      <Search onClick={this.submit}onChange={this.input}/>
      <ContainerBack heading="Searched">
       {resultArray.map((book,index)=>{
         
         return(<ResultRow 
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.thumbnail}
          link={book.volumeInfo.canonicalVolumeLink}
          save={"Save"}
          view={"View"}
          arrayPosition={index}
          // id={book.id}
          key={book.id}
          add={this.add}
          searched={true}
         />
         )
        })}
      </ContainerBack>
      </Container>
      </>
    )
  }
  
}

export default Searched;
