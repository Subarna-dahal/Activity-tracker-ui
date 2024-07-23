import { Button, Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { getOne, update,remove } from "../services/subactivities";
import { getAll } from "../services/activities";

const SubActivity = ({ data, setData }) => {
  const handleDelete = (id) => {
      return remove(id);
  };

  const handleUpdate = async (e, data) => {
    e.preventDefault();
    const { _id } = data;
    const { data: oneData } = await getOne(_id);
    const payload = {
      isCompleted: !oneData?.data?.isCompleted,
    };
    const { data: newData } = await update(_id, payload);
    if (newData?.data?.isCompleted !== undefined) {
      const refetch = await getAll();
      setData(refetch?.data?.data);
    }
  };

  return (
    <div className="row mb-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Form.Check
            type="checkbox"
            checked={data?.isCompleted}
            onChange={(e) => handleUpdate(e, data)}
          />
          <div className="px-2">{data?.name}</div>
        </div>
        <div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(data?._id)}
          >
            <FaTrashAlt />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubActivity;