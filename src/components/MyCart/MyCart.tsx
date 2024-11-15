import { Drawer, List, Typography } from "antd";
import React, { useEffect } from "react";
import getCart from "../../features/userCart/getUserCart/api";
import { GetCart } from "../../features/userCart/getUserCart/type";
import ProductCard from "../ProductCard/ProductCard";
import delCart from "../../features/userCart/delCart/api";
import { DeleteCart } from "../../features/userCart/delCart/type";
import addCart from "../../features/userCart/addCart/api";
import { Cart } from "../../features/userCart/addCart/type";

type MyCartProps = {
  open: boolean;
  onClose: () => void;
};

export default function MyCart({ open, onClose }: MyCartProps) {
  const [myCart, setMyCart] = React.useState<GetCart>({} as GetCart);
  const getUserCart = async () => {
    const cart = await getCart("d60db691-7e40-4d72-ad45-ccccd5905404");
    setMyCart(cart.data);
  };

  const delUserCart = async (userCartId: string) => {
    const request: DeleteCart = {
      userId: "d60db691-7e40-4d72-ad45-ccccd5905404",
      userCartId: userCartId,
    };
    const response = await delCart(request);
    console.log(response);
    if (response.isSuccess) {
      getUserCart();
    }
  };

  const onClickAddToCart = async (productId: string, quantity: number) => {
    const newCart: Cart = {
      userId: "d60db691-7e40-4d72-ad45-ccccd5905404",
      productId: productId,
      quantity: quantity,
    };
    const response = await addCart(newCart);
    console.log(response);
    if (response.isSuccess) {
      getUserCart();
    }
  };

  useEffect(() => {
    if (open) {
      getUserCart();
    }
  }, [open]);
  return (
    <Drawer title="MyCart" open={open} onClose={onClose}>
      {myCart.userCartDetail && myCart.userCartDetail.length > 0 ? (
        <List
          dataSource={myCart.userCartDetail}
          renderItem={(item) => (
            <React.Fragment>
              <div key={item.productId}>
                <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.imgUrl}
                      alt="Product image"
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <h2 className="text-lg font-bold">{item.productName}</h2>

                    <div className="mt-4 flex items-center">
                      <span className="mr-2 text-gray-600">
                        {item.quantity}
                      </span>
                      <div className="flex items-center">
                        <button
                          className="bg-gray-200 rounded-l-lg px-2 py-1"
                          onClick={() => delUserCart(item.userCartId)}
                        >
                          -
                        </button>
                        <span className="mx-2 text-gray-600">
                          {item.quantity}
                        </span>
                        <button
                          className="bg-gray-200 rounded-r-lg px-2 py-1"
                          onClick={() => onClickAddToCart(item.productId, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        />
      ) : (
        <Typography.Text>No items in your cart.</Typography.Text>
      )}
    </Drawer>
  );
}
