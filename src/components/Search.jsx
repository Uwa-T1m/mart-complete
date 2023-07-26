import { Container } from 'react-bootstrap'
import {RiSearch2Line} from 'react-icons/ri'

const Search = () => {
  return (
    <Container>
        <i><RiSearch2Line /></i>
        <input type="text" placeholder='Search for products'/>
    </Container>
  )
}

export default Search