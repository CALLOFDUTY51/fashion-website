import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
 // Ensure you import the CSS file

const SliderPage = () => {
  // Sample product data
  const products = [
    { id: 1, title: 'Product Title 1', price: '$19.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/shop/img-1.jpg' },
    { id: 2, title: 'Product Title 2', price: '$29.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/shop/img-2.jpg' },
    { id: 3, title: 'Product Title 3', price: '$39.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/shop/img-3.jpg' },
    { id: 4, title: 'Product Title 4', price: '$49.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/shop/img-4.jpg' },
    { id: 5, title: 'Product Title 5', price: '$59.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/shop/img-5.jpg' },
    { id: 6, title: 'Product Title 6', price: '$69.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/shop/img-1.jpg' },
    { id: 7, title: 'Product Title 7', price: '$79.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/feature-product/img-11.jpg' },
    { id: 8, title: 'Product Title 8', price: '$89.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/feature-product/img-7.jpg' },
    { id: 9, title: 'Product Title 9', price: '$99.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/shop/img-5.jpg' },
    { id: 10, title: 'Product Title 10', price: '$109.99', image: 'https://www.azedw-react.wp-ts.com/assets/images/shop/img-3.jpg' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteraction, setIsUserInteraction] = useState(false); // Track if user clicked

  useEffect(() => {

    const mobileView = window.innerWidth <= 768; 
    if (!isUserInteraction) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length));
      }, 2000); // Slide every 2 seconds if no user interaction

      return () => clearInterval(interval); // Clean up on component unmount
    }
  }, [products.length, isUserInteraction]);

  // Handle left click
  const handleLeftClick = () => {
    setIsUserInteraction(true);
    setCurrentIndex((prevIndex) => (prevIndex - 3 + products.length) % (products.length));
    setIsUserInteraction(false);
  };

  // Handle right click
  const handleRightClick = () => {
    setIsUserInteraction(true);
    setCurrentIndex((prevIndex) => (prevIndex + 3) % (products.length));
    setIsUserInteraction(false);
  };

  return (
    <>    
      <div className='slider-header'>
  Recent Sliders
  
</div>
<hr style={{border:"1px solid black", width:"50%", marginBottom:"4rem"}} />

<div className="slider-container">
  <div className="card-slider" style={{ transform: `translateX(-${currentIndex *  (window.innerWidth <= 768 ? 100 : 25)}%)` }}>
    {products.map(product => (
      <div className="col-12 col-md-6 col-lg-4" key={product.id}>
        <Card className="slider-card border-0">
          <Card.Img variant="top" src={product.image} />
          <div className="icon-overlay">
            <i className="fas fa-eye"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
          <Card.Body className="text-center">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <strong>{product.price}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</div>

    </>
  );
};


export default SliderPage;
