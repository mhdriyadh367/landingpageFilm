
// import component
import React, { useEffect, useState } from "react";
// akhir


import { Card, Col, Container, Row, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"

// import library fetch data api
import axios from "axios"
// akhir


const Trending = () => {
  // panggil data dengan axios lib
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY

      }
    }).then((response) =>{
  
      setMovies(response.data.results)
    })
  }, [])
  // akhir

  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white"  id="trending">TRENDING MOVIES</h1>
        <br/>
        <Row>

          
          {movies.map((result, index) => {
            return(
              <Col md={4} className="movieWrapper" key={index}>
            <Card className="movieImage">
            <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="testing" className="images" />
            <div className="bg-dark ">
              <div className="p-2 m-1  text-white ">


            
            <Card.Title className="text-center">{result.title}</Card.Title>
            <Card.Text  className="text-left" >
             {result.overview}
            </Card.Text>
            <Card.Text  className="text-left">{result.release_data}
            </Card.Text>
            </div>
              </div>
          
            </Card>
          </Col>
            )
          })}

          
          

        </Row>
      </Container>
      
    </div>
  )
}

export default Trending