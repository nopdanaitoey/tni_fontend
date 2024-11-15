import React from "react";

type ProductCardProps = {
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
};

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src={props.imgUrl}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <p className="text-lg font-bold text-black truncate block capitalize">
            {props.name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {props.price}
            </p>

            <div className="ml-auto">
              <p
                className={`text-sm font-semibold cursor-auto my-3 ${
                  props.quantity <= 0 ? "text-red-500" : "text-gray-600"
                }`}
              >
                {props.quantity}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
