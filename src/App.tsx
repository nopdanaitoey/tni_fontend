import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import fetchProduct from "./features/product/fetchProduct/api";
import { Products } from "./features/product/fetchProduct/type";
import React from "react";
import addCart from "./features/userCart/addCart/api";
import { Cart } from "./features/userCart/addCart/type";

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const getProduct = async () => {
    const response = await fetchProduct();
    if (response.isSuccess) {
      setProducts(response.data);
    }
  };

  const onClickAddToCart = async (productId: string, quantity: number) => {
    var product = products.find((product) => product.id === productId);
    if (product) {
      const newCart: Cart = {
        userId: "d60db691-7e40-4d72-ad45-ccccd5905404",
        productId: productId,
        quantity: quantity,
      };
      const response = await addCart(newCart);
      console.log(response);
      if (response.isSuccess) {
        product.quantity -= quantity;
        setProducts([...products]);
      }
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <React.Fragment>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product) => (
          <div
            onClick={() => {
              onClickAddToCart(product.id, 1);
            }}
          >
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              imgUrl={product.imgUrl}
            />
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}

export default App;
