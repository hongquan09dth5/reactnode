/// <reference types="inventory/node_modules/connected-react-router" />
declare const rootReducer: (history: any) => import("redux").Reducer<import("redux").CombinedState<{
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
}>, import("redux").AnyAction>;
export default rootReducer;
