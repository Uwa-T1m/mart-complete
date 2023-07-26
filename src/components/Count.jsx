import 'bootstrap/dist/css/bootstrap.css'
import {FaPlus, FaMinus} from 'react-icons/fa'

const Counter = ({count, setCount}) => {

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <button className='btn' onClick={handleIncrement}><FaPlus /></button>
      <h1>{count}</h1>
      <button className='btn' onClick={handleDecrement}><FaMinus /></button>
    </div>
  );
};

export default Counter;
