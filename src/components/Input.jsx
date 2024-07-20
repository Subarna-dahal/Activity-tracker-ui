
import { Button } from 'react-bootstrap';

const Input = ({placeholder='fill the form',variant='danger'}) => {

  return (

    <div className='d-flex justify-content-centre'>
        <div className='w-75'>
        <input  className="form-control" placeholder={placeholder}/>
        </div>
        <div>
        <Button variant={variant}>Submit</Button>
        </div>
    </div>
  )
}

export default Input;