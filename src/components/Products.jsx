import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const Products = () => {
  const [hovered, setHovered] = useState(null);

  const products = [
    {
      id: 1,
      title: 'Ans Design Studio Indigo Full Tunic',
      price: '$39.00 USD',
      defaultImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8187_Custom.jpg?v=1682920293&width=493',
      hoverImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8188_Custom.jpg?v=1682920293&width=360', // Image to show on hover
    },
    {
        id: 2,
        title: 'Ans Design Studio Indigo Full Tunic',
        price: '$39.00 USD',
        defaultImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8077_Custom_Custom.jpg?v=1682917768&width=493',
        hoverImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8079_Custom.jpg?v=1682918104&width=360', // Image to show on hover
      },
      {
        id: 3,
        title: 'Ans Design Studio Indigo Full Tunic',
        price: '$39.00 USD',
        defaultImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8178_Custom.jpg?v=1682919119&width=493',
        hoverImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8179_Custom.jpg?v=1682919119&width=360', // Image to show on hover
      },
      {
        id: 4,
        title: 'Ans Design Studio Indigo Full Tunic',
        price: '$39.00 USD',
        defaultImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8205_Custom.jpg?v=1682920172&width=493',
        hoverImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8207_Custom.jpg?v=1682920172&width=360', // Image to show on hover
      },
      {
        id: 5,
        title: 'Ans Design Studio Indigo Full Tunic',
        price: '$39.00 USD',
        defaultImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8165_Custom.jpg?v=1682918395&width=493',
        hoverImage: 'https://asthaandsidharth.com/cdn/shop/files/DSC_8166_Custom.jpg?v=1682918395&width=360', // Image to show on hover
      },
      {
        id: 6,
        title: 'Ans Design Studio Indigo Full Tunic',
        price: '$39.00 USD',
        defaultImage: 'https://asthaandsidharth.com/cdn/shop/files/MG_2206_1.jpg?v=1685094660&width=493',
        hoverImage: 'https://asthaandsidharth.com/cdn/shop/files/MG_2207_1.jpg?v=1685094660&width=360', // Image to show on hover
      }
    // Add more product objects as needed
  ];

  return (
    <>
    <br /><br /><br />
    <div className="product">
      <h1>Featured Products</h1>
      <br /><br />
      <div className='product-container'>
        {products.map((product, index) => (
          <Card 
            key={product.id} 
            className='product_card'
            style={{ width: '18rem' }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <Card.Img
              variant="top"
              src={hovered === index ? product.hoverImage : product.defaultImage}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
    </>
  );
};

export default Products;
