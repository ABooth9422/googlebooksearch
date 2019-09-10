import React, { Component } from "react";
import Nav from "../components/nav"
import Container from "../components/container"
import Header from "../components/header"
import ResultRow from "../components/result"
import ContainerBack from "../components/containerBack"
import Search from "../components/search"
import API from "../utils/API";


class Searched extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  render(){
    return(
      <>
      <Nav/>
      <Container>
      <Header/>
      <Search/>
      <ContainerBack heading="Searched">
       
      <ResultRow />
      </ContainerBack>
      </Container>
      </>
    )
  }
  
}

export default Searched;
