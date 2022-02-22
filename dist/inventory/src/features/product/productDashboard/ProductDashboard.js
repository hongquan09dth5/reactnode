"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const hooks_1 = require("./../../../app/hook/hooks");
const productActions_1 = require("../productActions");
const ProductList_1 = require("./ProductList");
const ProductDashboard = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { products } = (0, hooks_1.useAppSelector)((state) => state.product);
    (0, react_1.useEffect)(() => {
        const fetchProducts = async () => {
            await dispatch((0, productActions_1.fetchProductsAsync)());
        };
        fetchProducts();
    }, [dispatch]);
    return (<>
      {products && (<>
          <ProductList_1.default products={products}/>
        </>)}
    </>);
};
exports.default = ProductDashboard;
//# sourceMappingURL=ProductDashboard.js.map