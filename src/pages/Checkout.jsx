import { Row, Col, Container } from "react-bootstrap"

const Checkout = () => {
  return (
   <Container>
     <Row className="g-5">
        <Col md={7} lg={8}>
        <h4 className="mb-3">Billing Address</h4>
        <form action="" className="needs-validation">
            <Row className="g-3">
                <Col className="sm-6">
                    <label htmlFor="" className="form-label">First Name</label>
                    <input type="text" name="" id="" className="form-control" required/>
                </Col>
                <Col className="sm-6">
                <label htmlFor="" className="form-label">Last Name</label>
                    <input type="text" name="" id="" className="form-control" required/>
                </Col>
                <div className="col-12">
                <label htmlFor="" className="form-label">Email Address</label>
                    <input type="email" name="" id="" className="form-control" required/>
                </div>
                <div className="col-12">
                <label htmlFor="" className="form-label">Address</label>
                    <input type="text" name="" id=""  className="form-control" required/>
                </div>
                <Col md={5}>
                    <label htmlFor="" className="form-label">Country</label>
                    <select name="" id="" className='form-select' required>
                        <option value="Choose...">Choose...</option>
                        <option value="">United States</option>
                    </select>
                </Col>
                <Col md={4}>
                    <label htmlFor="" className="form-label">State</label>
                    <select name="" id="" className='form-select' required>
                        <option value="Choose...">Choose...</option>
                        <option value="">California</option>
                    </select>
                </Col>
                <Col md={3}>
                    <label htmlFor="" className="form-label">Zip</label>
                    <input type="number" className="form-control" required/>
                </Col>
                <hr className="my-2" />
                <div className="form-check">
                    <input type="checkbox" name="" id="" className="form-check-input"  required/>
                    <label htmlFor="" className="form-check-label">Shipping address is the same as billing address</label>
                </div>
                <hr className="my-4" />
    <h4 className="mb-3">Payment</h4>
    <div className="my-3">
        <div className="form-check">
            <input type="radio" name="paymentMethod" id="" className="form-check-input"  required/>
            <label htmlFor="" className="form-check-label">Credit card</label>
        </div>
        <div className="form-check">
            <input type="radio" name="paymentMethod" id="" className="form-check-input"  required/>
            <label htmlFor="" className="form-check-label">Debit Card</label>
        </div>
        <div className="form-check">
            <input type="radio" name="paymentMethod" id="" className="form-check-input"  required/>
            <label htmlFor="" className="form-check-label">Paypal</label>
        </div>
    </div>
    <Row className="gy-3">
    <Col md={6}>
        <label htmlFor="">Name on Card</label>
        <input type="text" className="form-control" required/>
    </Col>
    <Col md={6}>
        <label htmlFor="">Credit Card Number</label>
        <input type="text" className="form-control" required/>
    </Col>
    <Col md={3}>
        <label htmlFor="">Expiration</label>
        <input type="text" className="form-control" required/>
    </Col>
    <Col md={3}>
        <label htmlFor="">CVV</label>
        <input type="text" className="form-control" required/>
    </Col>
    </Row>

    <hr className="my-4" />
    <button className="w-100 btn btn-primary my-2">Checkout</button>
            </Row>
        </form>
        </Col>
    </Row>
   </Container>
  )
}

export default Checkout