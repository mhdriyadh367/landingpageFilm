import { Card, Col, Container, Row, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"



const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white"  id="trending">TRENDING MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
            <Image src={duneImage} alt="Dune Images" className="images" />
            <div className="bg-dark ">
              <div className="p-2 m-1  text-white ">


            
            <Card.Title className="text-center">Dune</Card.Title>
            <Card.Text  className="text-left" >
              This is a wider card with supporting text below as a natural lead-in to
              additional content. 
            </Card.Text>
            <Card.Text  className="text-left">Last updated 3 mins ago
            </Card.Text>
            </div>
              </div>
          
            </Card>
          </Col>
          <Col  md={4} className="movieWrapper">
            <Card className="movieImage">
            <Image src={everything} alt="Dune Images" className="images" />
            <div className="bg-dark ">
              <div className="p-2 m-1  text-white ">


            
            <Card.Title className="text-center">Dune</Card.Title>
            <Card.Text  className="text-left" >
              This is a wider card with supporting text below as a natural lead-in to
              additional content. 
            </Card.Text>
            <Card.Text  className="text-left">Last updated 3 mins ago
            </Card.Text>
            </div>
              </div>
          
            </Card>
          </Col>
          <Col  md={4} className="movieWrapper">
            <Card className="movieImage">
            <Image src={infinite} alt="Dune Images" className="images" />
            <div className="bg-dark ">
              <div className="p-2 m-1  text-white ">


            
            <Card.Title className="text-center">Dune</Card.Title>
            <Card.Text  className="text-left" >
              This is a wider card with supporting text below as a natural lead-in to
              additional content. 
            </Card.Text>
            <Card.Text  className="text-left">Last updated 3 mins ago
            </Card.Text>
            </div>
              </div>
          
            </Card>
          </Col>

          <Col  md={4} className="movieWrapper">
            <Card className="movieImage">
            <Image src={joker} alt="Dune Images" className="images"/>
            <div className="bg-dark ">
              <div className="p-2 m-1  text-white ">


            
            <Card.Title className="text-center">Dune</Card.Title>
            <Card.Text  className="text-left" >
              This is a wider card with supporting text below as a natural lead-in to
              additional content. 
            </Card.Text>
            <Card.Text  className="text-left">Last updated 3 mins ago
            </Card.Text>
            </div>
              </div>
          
            </Card>
          </Col>

          <Col  md={4} className="movieWrapper">
            <Card className="movieImage">
            <Image src={lightyear} alt="Dune Images" className="images"/>
            <div className="bg-dark ">
              <div className="p-2 m-1  text-white ">


            
            <Card.Title className="text-center">Dune</Card.Title>
            <Card.Text  className="text-left" >
              This is a wider card with supporting text below as a natural lead-in to
              additional content. 
            </Card.Text>
            <Card.Text  className="text-left">Last updated 3 mins ago
            </Card.Text>
            </div>
              </div>
          
            </Card>
          </Col>

          <Col  md={4} className="movieWrapper">
            <Card className="movieImage">
            <Image src={morbius} alt="Dune Images"className="images" />
            <div className="bg-dark ">
              <div className="p-2 m-1  text-white ">


            
            <Card.Title className="text-center">Dune</Card.Title>
            <Card.Text  className="text-left" >
              This is a wider card with supporting text below as a natural lead-in to
              additional content. 
            </Card.Text>
            <Card.Text  className="text-left">Last updated 3 mins ago
            </Card.Text>
            </div>
              </div>
          
            </Card>
          </Col>

        </Row>
      </Container>
      
    </div>
  )
}

export default Trending