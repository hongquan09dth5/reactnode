import React from "react";
import { IProductListItem } from "../../../app/model/product";
interface IProps {
    products: IProductListItem[];
}
declare const ProductList: React.FC<IProps>;
export default ProductList;
