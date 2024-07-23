import { useState, useEffect } from "react";
import { Accordion, Card, Form } from "react-bootstrap";

import Input from "../components/Input";
import SubActivity from "../components/Subactivity";
import Notify from "../components/Notify";

import { create, getAll, updateOne } from "../services/activities";

const Home = () => {
  const [newActivity, setNewActivity] = useState("");
  const [data, setData] = useState([]);

  const addNewActivity = async () => {
    const payload = {
      name: newActivity,
    };
    const result = await create(payload);
    if (result?.data?.msg) {
      const newActivities = await getAll();
      const { data } = newActivities;
      setData(data?.data);
    }
  };

  const handleCheckbox = async (activity) => {
    const payload = {
      isCompleted: !activity?.isCompleted,
    };
    const result = await updateOne(activity?._id, payload);
    if (result?.data?.msg) {
      const newActivities = await getAll();
      const { data } = newActivities;
      setData(data?.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAll();
      const { data } = result;
      setData(data?.data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row mt-2">
        <h1 className="text-center">Activity Tracker</h1>
      </div>
      <div className="row">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Input
              placeholder="Add new Activity"
              value={newActivity}
              onChange={setNewActivity}
              onSubmit={addNewActivity}
            />
            <div className="m-3">
              {data && data.length > 0 ? (
                data?.map((activity, index) => {
                  return (
                    <Accordion key={index} defaultActiveKey={index}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <Form.Check
                            type="checkbox"
                            checked={activity?.isCompleted}
                            onChange={() => handleCheckbox(activity)}
                          />
                          <div className="mt-1 px-2">{activity?.name}</div>
                        </Accordion.Header>
                        <Accordion.Body>
                          {data && activity?.result?.length > 0 ? (
                            activity?.result.map((sa, index) => (
                              <SubActivity
                                key={index}
                                data={sa}
                                setData={setData}
                              />
                            ))
                          ) : (
                            <Notify msg="No Sub Activities Found" />
                          )}
                          <Input placeholder="Add new SubActivity" />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  );
                })
              ) : (
                <Notify msg="No Activities Found" />
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;