import { Card, Accordion, Form } from "react-bootstrap";
import Input from "../components/Input";
import Subactivity from "../components/Subactivity";
import Notify from "../components/Notify";
import { useState, useEffect } from "react";
import { getALL } from "../services/activities";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await getALL();
      const { data } = result;
      setData(data.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Activity Tracker</h1>
      </div>
      <div className="row">
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Input />
            <Notify />
            <div className="w-3">
              {data.length > 0 ? (
                data.map((activity, index) => (
                  <Accordion key={index} defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <Form.Check
                          type="checkbox"
                          checked={activity?.iscompleted}
                          onChange={() => {}}
                        />
                        <div className="mt-1 px-2">{activity?.name}</div>
                      </Accordion.Header>
                      <Accordion.Body>
                        {activity?.result?.length > 0 ? (
                          activity?.result.map((sa, index) => (
                            <Subactivity key={index} data={sa} />
                          ))
                        ) : (
                          <div>No subactivities</div>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))
              ) : (
                <div>No activity</div>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
