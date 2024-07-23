import { APIs } from "../constants";
import { instance } from "../utils/axios";

export const create = (payload) => {
  return instance.post(APIs.ACTIVITIES, payload);
};

export const updateOne = (id, payload) => {
  return instance.patch(APIs.ACTIVITIES + `/${id}`, payload);
};

export const getAll = () => {
  return instance.get(APIs.ACTIVITIES + "/get-all");
};