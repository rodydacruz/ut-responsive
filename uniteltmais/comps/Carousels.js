import Carousel from 'react-bootstrap/Carousel'

export default function Carousels() {
    return (
        
        <Carousel variant="dark" touch>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="3.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
