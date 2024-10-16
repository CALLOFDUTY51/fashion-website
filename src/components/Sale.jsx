import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Sale() {
  return (
    <>
   <div className='sale-heading'><u>On Sale</u></div> 
    
    <div className="card-container">
  <Card className="bg-dark text-white" style={{ width: '22rem' }}>
    <Card.Img src="https://www.azedw-react.wp-ts.com/assets/images/feature-product/img-4.jpg" alt="Card image" />
    <div className="overlay-content">
      <p>Spring Collection</p>
      <h2>Sale <h1>40%</h1>Off</h2>
      <p>DON'T MISS</p>
      <button>Shop Now</button>
    </div>
  </Card>
  <Card className="bg-dark text-white" style={{ width: '22rem' }}>
    <Card.Img src="https://www.azedw-react.wp-ts.com/assets/images/feature-product/img-11.jpg" alt="Card image" />
    <div className="overlay-content">
      <p>Spring Collection</p>
      <h2>Sale <h1>40%</h1>Off</h2>
      <p>DON'T MISS</p>
      <button>Shop Now</button>
    </div>
  </Card>
  <Card className="bg-dark text-white" style={{ width: '22rem' }}>
    <Card.Img src="https://www.azedw-react.wp-ts.com/assets/images/feature-product/img-7.jpg" alt="Card image" />
    <div className="overlay-content">
      <p>Spring Collection</p>
      <h2>Sale <h1>40%</h1>Off</h2>
      <p>DON'T MISS</p>
      <button>Shop Now</button>
    </div>
  </Card>
</div>

  

  
    </>
  )
}

export default Sale