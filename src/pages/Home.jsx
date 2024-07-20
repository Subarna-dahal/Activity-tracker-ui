import { Card, Accordion, Form } from "react-bootstrap";
import Input from "../components/Input";
import Subactivity from "../components/Subactivity";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Activity Tracker</h1>
      </div>
      <div className="row">
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Input />
            <div className="w-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <Form.Check type="Checkbox" />
                    <div className="mt-1 px-2">Activity Number1</div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Subactivity/>
                    <Subactivity/>
                    <Subactivity/>
                    <Subactivity/>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
