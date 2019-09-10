import React, { Component } from "react";
import Nav from "../components/nav"
import Container from "../components/container"
import Header from "../components/header"
import ContainerBack from "../components/containerBack"
import API from "../utils/API";

class Saved extends Component {
  state = {
    book: {}
  };
 render(){
   return(
     <>
     <Nav />
     <Container>
      <Header/>
      <ContainerBack heading="Saved Articles">

      </ContainerBack>
     </Container>
      </>
   )
 }
}

export default Saved;
