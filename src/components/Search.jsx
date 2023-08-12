import { Container } from 'react-bootstrap'
import {RiSearch2Line} from 'react-icons/ri'

const Search = (filters, handleFilterChange) => {
  return (
    <Container className="form-control d-flex my-4  align-items-center shadow-none">
        <i><RiSearch2Line /></i>
        <input type="text" value={filters.title} onChange={handleFilterChange} placeholder='Search for products' className="outline-0 border-0 "/>
    </Container>
  )
}

export default Search