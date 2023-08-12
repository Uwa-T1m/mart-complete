import { Link } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import  Search  from '../components/Search';
import FIlterWidget from '../components/FIlterWidget';
import { useState } from 'react';
import AppNavbar from '../components/Navbar';
import Products from '../components/products';

const HomePage = () => {
  const [filters, setFilters] = useState({
    title: '',
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
      title: '',
      company: '',
      color: '',
      price: '',
      shipping: false,
      category: '',
    });
  };

  const filteredProducts = Products.filter((product) => {
    return (
      (!filters.title || product.name.toLowerCase().includes(filters.title.toLowerCase())) &&
      (!filters.company || product.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (!filters.color || product.colors.includes(filters.color)) &&
      (!filters.price || product.price <= parseFloat(filters.price)) &&
      (!filters.shipping || product.shipping === filters.shipping) &&
      (!filters.category || product.category.toLowerCase() === filters.category.toLowerCase())
    );
  }); 

  return (
    <>
    <Container>
    <AppNavbar />
        <Search />
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <Link to={`/product/${product.id}`} style={{textDecoration : "none"}}>
            <Card>
              <Card.Img variant="top" src={product.image} style={{ height: '175px' }} />
              <Card.Body>
                <Card.Title style={{textTransform: 'capitalize'}}>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
                </Link>
          </Col>
        ))}
      </Row>
      <FIlterWidget 
        filters={filters}
              handleFilterChange={handleFilterChange}
              resetFilters={resetFilters}
        />
    </Container>
    </>
  )
}

export default HomePage