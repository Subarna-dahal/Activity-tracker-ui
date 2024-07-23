import { Button } from "react-bootstrap";

const Input = ({
  placeholder = "Add placeholder",
  variant = "danger",
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75">
        <input
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div>
        <Button variant={variant} onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Input;