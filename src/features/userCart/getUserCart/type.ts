export interface GetCart {
  grandTotalPrice: number;
  grandTotalQuantity: number;
  userCartDetail: GetCartDetail[];
}

export interface GetCartDetail {
  userCartId: string;
  productId: string;
  productName: string;
  imgUrl: string;
  price: number;
  quantity: number;
}
