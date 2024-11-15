import axiosInstance from "../../../helpers/axios";
import { BaseResponse } from "../../../helpers/base";
import { Cart } from "./type";

const addCart = async (request: Cart): Promise<BaseResponse<null>> => {
  const { data } = await axiosInstance.post<BaseResponse<null>>(
    "/UserCart",
    request
  );
  return data;
};

export default addCart;
