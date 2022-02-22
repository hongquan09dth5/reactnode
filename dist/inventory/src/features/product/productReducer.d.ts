import { IProductListItem, IProduct } from "./../../app/model/product";
interface IProductState {
    products: IProductListItem[];
    product: IProduct;
}
declare const productReducer: (state: IProductState, { type, payload }: {
    type: any;
    payload: any;
}) => {
    products: any[];
    product: IProduct;
} | {
    product: any;
    products: IProductListItem[];
};
export default productReducer;
