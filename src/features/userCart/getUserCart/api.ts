import axiosInstance from "../../../helpers/axios";
import { BaseResponse } from "../../../helpers/base";
import { GetCart } from "./type";

const getCart = async (userId: string): Promise<BaseResponse<GetCart>> => {
  const { data } = await axiosInstance.get<BaseResponse<GetCart>>(
    `/UserCart/${userId}`
  );
  return data;
};

export default getCart;
