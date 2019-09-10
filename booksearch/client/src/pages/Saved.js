import React, { Component } from "react";
import Nav from "../components/nav"
import Container from "../components/container"
import Header from "../components/header"
import ContainerBack from "../components/containerBack"
import ResultRow from "../components/result"
import API from "../utils/API";

class Saved extends Component {

  state={
    saved:[]
    
  }

  componentDidMount(){
    API.getBooks((res)=>{
      this.setState({saved:res.data})
    })
    
  }

  remove = (book,i) =>{
    API.deleteBook(book,(cb)=>{
      
    })
   
    const newArray= this.state.saved.filter((val, index)=>{
      return index !== i;
    })
    
    newArray.slice(i,i+1)
    this.setState({saved:newArray})

  }
 render(){

    const savedArray= this.state.saved  
    console.log(savedArray)
   return(
     <>
     <Nav />
     <Container>
      <Header/>
      <ContainerBack heading="Saved Articles">
      {savedArray.map((book,index) =>{
         
         return(<ResultRow 
          title={book.title}
          author={book.author || book.authors}
          description={book.description || book.synopsis}
          image={book.image}
          link={book.link}
          save={"Save"}
          view={"View"}
          key={book._id}
          searched={false}
          remove={this.remove}
          arrayPosition={index}
          id={book._id}
         />
         )
        })}
      </ContainerBack>
     </Container>
      </>
   )
 }
}

export default Saved;
