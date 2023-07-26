import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Counter from '../components/Count'
import Products from '../components/products'
import AppNavbar from '../components/Navbar'

const ProductDetails = () => {
  const { id } = useParams()
  const product = Products.find(item => item.id === id)
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      quantity: count,
      price: product.price,
      image: product.image
    };



    // Get the existing cart items from localStorage or an empty array if none exists
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    // Add the new item to the cart
    const updatedCartItems = [...existingCartItems, newItem];

    // Save the updated cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

  };



  return (
    <Container>
     <AppNavbar />

      <Row>
        <Col sm={6}>
          <Card>
            <Card.Img src={product.image} variant='center' />
          </Card>
        </Col>
        <Col>
        
          <h1 style={{textTransform: 'capitalize'}}>{product.name}</h1>
          <span className="badge text-dark">${product.price}</span>
          <p>{product.description}
          <br />
          <br />
         <span style={{display: 'flex',gap: '10px', textAlign: 'center'}}> <b>SKU: </b> {product.id}</span>
         <span style={{display: 'flex',gap: '10px', textAlign: 'center'}}> <b>Brand: </b> {product.company}</span>
          </p>
          <hr />
          <div className="colors">
            <h6>Colors:  </h6>
          {product.colors.map((color) => (
           <div key={color} style={{
            background: color,
            height: '20px',
            width: '20px',
            borderRadius: '50%'
          }}></div>
        ))}
            </div>
            <div className="count">
      <Counter count={count} setCount={setCount}/>              
            </div>
            <Link onClick={handleAddToCart} className="btn btn-primary">ADD TO CART</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails