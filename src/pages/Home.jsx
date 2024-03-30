import HomepageCarousel from "../components/HomePageCarousel";
import React from "react";
import '../styles/Home.css'
import Container from "react-bootstrap/esm/Container";


function Home(){
    return(
        <div >
            <Container className="jumbotron m-3 text-center mx-auto ">
            <h1 className="display-4 text-body-enphasis ">Vible</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">Take notes and keep yourself reminded of what to do!</p>
            </Container>
          
           <HomepageCarousel/>
           
        </div>
      
    )
}

export default Home;