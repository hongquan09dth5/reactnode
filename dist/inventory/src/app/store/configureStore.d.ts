/// <reference types="inventory/node_modules/connected-react-router" />
import { ThunkAppDispatch } from "./../types/types";
export declare const history: any;
declare const store: import("redux").Store<import("redux").EmptyObject & {
    router: import("connected-react-router").RouterState<LocationState>;
    async: {
        loading: boolean;
        error: any;
    };
    product: {
        products: any[];
        product: import("../model/product").IProduct;
    } | {
        product: any;
        products: import("../model/product").IProductListItem[];
    };
}, import("redux").AnyAction> & {
    dispatch: ThunkAppDispatch;
};
export default store;
