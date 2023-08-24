import { IProduct } from "./product-type";

export interface IInitialState {
    cartCount: number;
    products: IProduct[];
    users: [];
    carts: [];
}