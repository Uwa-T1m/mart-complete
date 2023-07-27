import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './pages/HomePage';
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout';


const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
        <Route  path="/" element={<HomePage />}/>
          <Route  path="/cart" element={<Cart />}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/checkout" element={<Checkout />} />
          <Route path='/product/:id' element={<ProductDetails />}/>
        </Routes>
       
      </Container>
    </Router>
  );
};

export default App;
