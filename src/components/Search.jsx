import { Container } from 'react-bootstrap'
import {RiSearch2Line} from 'react-icons/ri'

const Search = () => {
  return (
    <Container className="form-control d-flex my-4 outline-0 border-0 shadow-none">
        <i><RiSearch2Line /></i>
        <input type="text" placeholder='Search for products'/>
    </Container>
  )
}

export default Search