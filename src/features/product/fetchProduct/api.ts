import axiosInstance from "../../../helpers/axios";
import { BaseResponse } from "../../../helpers/base";
import { Products } from "./type";

const fetchProduct = async () : Promise<BaseResponse<Products[]>> => {
  const { data } = await axiosInstance.get<BaseResponse<Products[]>>("/products");
  return data;
};

export default fetchProduct;
