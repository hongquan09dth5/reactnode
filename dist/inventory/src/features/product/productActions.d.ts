import { IProduct } from "./../../app/model/product";
export declare const fetchProductsAsync: () => (dispatch: any) => Promise<void>;
export declare const fetchProductsByIdAsync: (id: number) => (dispatch: any) => Promise<void>;
export declare const createProductAsync: (req: IProduct) => (dispatch: any) => Promise<void>;
export declare const updateProductAsync: (req: IProduct) => (dispatch: any) => Promise<void>;
export declare const deleteProductAsync: (id: number) => (dispatch: any) => Promise<void>;
export declare const clearProduct: () => {
    type: string;
};
