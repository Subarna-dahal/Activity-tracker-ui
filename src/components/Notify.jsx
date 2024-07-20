import { Alert } from "react-bootstrap";
const Notify = ({variant="danger",msg="NO message set"}) => {
  return (
    <div>
 <Alert variant={variant} className="text-centre">
          {msg}
        </Alert>
    </div>
  )
}

export default Notify;