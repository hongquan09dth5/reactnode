"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const connected_react_router_1 = require("connected-react-router");
const asyncReducer_1 = require("./asyncReducer");
const productReducer_1 = require("./../../features/product/productReducer");
const rootReducer = (history) => (0, redux_1.combineReducers)({
    router: (0, connected_react_router_1.connectRouter)(history),
    async: asyncReducer_1.default,
    product: productReducer_1.default,
});
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map