import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/pic1.jpg';
import { Button } from 'react-bootstrap';
function Header() {
  return (
    <>
    <div className="carousel-container">
      <Carousel fade>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://www.azedw-react.wp-ts.com/assets/images/slider/slide-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Great LookBook 2024</h3>
            <p>STYLISH SHOP</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.azedw-react.wp-ts.com/assets/images/slider/slide-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Stylish Coat</h3>
            <p>STYLISH SHOP</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Trendy Collection</h3>
            <p>STYLISH SHOP</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <button className="carousel-button" > SHOP NOW</button>
    </div>
    </>
  );
}

export default Header;
