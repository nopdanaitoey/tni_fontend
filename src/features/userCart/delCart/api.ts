import axiosInstance from "../../../helpers/axios";
import { BaseResponse } from "../../../helpers/base";
import { DeleteCart } from "./type";

const delCart = async (cart: DeleteCart): Promise<BaseResponse<null>> => {
  const { data } = await axiosInstance.delete<BaseResponse<null>>(
    `/UserCart/${cart.userId}/${cart.userCartId}`
  );
  return data;
};

export default delCart;
