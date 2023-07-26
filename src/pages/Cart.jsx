import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import '../index.css'
import { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

  const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      setCartItems(existingCartItems);
    }, []);
  
    const handleRemoveItem = (itemId) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
  
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

return (
    <>
<h1>Cart</h1>
<Row  className='table-row'>
  <Col><h5>ITEM</h5></Col>
  <Col><h5>NAME</h5></Col>
  <Col><h5>PRICE</h5></Col>
  <Col><h5>QUANTITY</h5></Col>
  <Col></Col>
</Row>
{cartItems.length === 0 ? (<h2>Your Cart Is Empty</h2>) : (
  cartItems.map(product => (
    <Row className='table-row mb-9' key={product.id}>
    {/*eslint-disable-next-line */}
      <Col><img src={product.image} className='table-img' /></Col>
        <Col><h5>{product.name}</h5></Col>
        <Col><h5>${parseInt(product.price * product.quantity)}</h5></Col>
       <Col><h5>{product.quantity}</h5></Col>
       <Col><Button variant='danger' onClick={()=>handleRemoveItem(product.id)}><FaTrashAlt /></Button></Col>
    </Row>
    
    ))
)
  
}
<div className='btn-action-holder'>
<Link to='/'className='btn btn-primary'>Continue Shopping</Link>
  <Button variant='danger' onClick={()=>{
     const updatedCartItems = [];
     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
     setCartItems(updatedCartItems);
  }}>Clear Cart</Button>
</div>

  <Card style={{ width: '50%', float: 'right'}}>
{cartItems.length === 0 ? '' : (
  <>
  <Card.Body>
<span><b>Sub Totals:</b> ${calculateTotalPrice()} </span>
<br />
  <span><b>Shipping Fees:</b> ${5.43}</span>
  <hr />
  <span><b>Order Totals: </b> ${calculateTotalPrice() + 5.43}</span>
</Card.Body>
<Link to='/checkout'><Button variant='primary' className='w-100' style={{borderRadius: '0'}}><FaShoppingCart /> Checkout</Button></Link>
  </>
)

}
  </Card>

</>
  
  )
}

export default Cart