"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productConstants_1 = require("./productConstants");
const defaultState = {
    products: [],
    product: null,
};
const productReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case productConstants_1.FETCH_PRODUCTS:
            return Object.assign(Object.assign({}, state), { products: [...payload] });
        case productConstants_1.FETCH_PRODUCT_BY_ID:
            return Object.assign(Object.assign({}, state), { product: payload });
        case productConstants_1.CLEAR_PRODUCT:
            return Object.assign(Object.assign({}, state), { product: null });
        default:
            return state;
    }
};
exports.default = productReducer;
//# sourceMappingURL=productReducer.js.map