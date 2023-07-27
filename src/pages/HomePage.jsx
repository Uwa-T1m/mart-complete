import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import  Search  from '../components/Search';
import FIlterWidget from '../components/FIlterWidget';
import { useState } from 'react';
import AppNavbar from '../components/Navbar';
import Products from '../components/products';

const HomePage = () => {
  const [filters, setFilters] = useState({
    company: '',
    color: '',
    price: '',
    shipping: false,
    category: '',
  });

 const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      company: '',
      color: '',
      price: '',
      shipping: false,
      category: '',
    });
  };

  const filteredProducts = Products.filter((product) => {
    return (
      (!filters.company || product.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (!filters.color || product.colors.includes(filters.color)) &&
      (!filters.price || product.price <= parseFloat(filters.price)) &&
      (!filters.shipping || product.shipping === filters.shipping) &&
      (!filters.category || product.category.toLowerCase() === filters.category.toLowerCase())
    );
  }); 

  return (
    <>
     <AppNavbar />
        <Search />
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} style={{ height: '175px' }} />
              <Card.Body>
                <Card.Title style={{textTransform: 'capitalize'}}>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <FIlterWidget 
        filters={filters}
              handleFilterChange={handleFilterChange}
              resetFilters={resetFilters}
        />
    </>
  )
}

export default HomePage