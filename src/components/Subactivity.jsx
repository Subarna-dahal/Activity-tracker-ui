import { MdDelete } from "react-icons/md";
import {Button, Form} from 'react-bootstrap';
const Subactivity = () => {
  return (
    <div className='row'>
        <div className='d-flex justify-content-between m-2'>
      <div className='d-flex'>
      <Form.Check type='checkbox'/>
      <div className='px-2'>SubActivity</div>
      </div>
      <Button variant='danger' size='2w'>
      <MdDelete />
      </Button>
        </div>

    </div>
  )
}

export default Subactivity;