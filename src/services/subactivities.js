import { instance } from "../utils/axios";
import { APIs } from "../constants";


export const create=(payload)=>{
    return instance.post(APIs.SUBACTIVITIES,payload);

}

export const remove=(id)=>{
    return instance.delete(APIs.SUBACTIVITIES,`/${id}`);
}