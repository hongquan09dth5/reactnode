"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearProduct = exports.deleteProductAsync = exports.updateProductAsync = exports.createProductAsync = exports.fetchProductsByIdAsync = exports.fetchProductsAsync = void 0;
const agent_1 = require("./../../app/api/agent");
const asyncReducer_1 = require("./../../app/store/asyncReducer");
const productConstants_1 = require("./productConstants");
const photo_service_1 = require("./../../app/common/photos/photo.service");
const fetchProductsAsync = () => async (dispatch) => {
    dispatch((0, asyncReducer_1.asyncStart)());
    try {
        const products = await agent_1.default.Products.list();
        dispatch({ type: productConstants_1.FETCH_PRODUCTS, payload: products });
        dispatch((0, asyncReducer_1.asyncFinish)());
    }
    catch (error) {
        dispatch((0, asyncReducer_1.asyncError)(error));
        throw error;
    }
};
exports.fetchProductsAsync = fetchProductsAsync;
const fetchProductsByIdAsync = (id) => async (dispatch) => {
    dispatch((0, asyncReducer_1.asyncStart)());
    try {
        const data = await agent_1.default.Products.getById(id);
        dispatch({ type: productConstants_1.FETCH_PRODUCT_BY_ID, payload: data });
        dispatch((0, asyncReducer_1.asyncFinish)());
    }
    catch (error) {
        dispatch((0, asyncReducer_1.asyncError)(error));
        throw error;
    }
};
exports.fetchProductsByIdAsync = fetchProductsByIdAsync;
const createProductAsync = (req) => async (dispatch) => {
    dispatch((0, asyncReducer_1.asyncStart)());
    try {
        if (req.files && req.files.length > 0) {
            const file = await (0, photo_service_1.updateSingleProductImage)(req.files);
            req.imageurl = `${file.destination}/${file.filename}`;
        }
        await agent_1.default.Products.create(req);
        dispatch((0, asyncReducer_1.asyncFinish)());
    }
    catch (error) {
        dispatch((0, asyncReducer_1.asyncError)(error));
        throw error;
    }
};
exports.createProductAsync = createProductAsync;
const updateProductAsync = (req) => async (dispatch) => {
    dispatch((0, asyncReducer_1.asyncStart)());
    try {
        if (req.files && req.files.length > 0) {
            const file = await (0, photo_service_1.updateSingleProductImage)(req.files);
            req.imageurl = `${file.destination}/${file.filename}`;
        }
        await agent_1.default.Products.update(req);
        dispatch((0, asyncReducer_1.asyncFinish)());
    }
    catch (error) {
        dispatch((0, asyncReducer_1.asyncError)(error));
        throw error;
    }
};
exports.updateProductAsync = updateProductAsync;
const deleteProductAsync = (id) => async (dispatch) => {
    dispatch((0, asyncReducer_1.asyncStart)());
    try {
        await agent_1.default.Products.delete(id);
        dispatch((0, asyncReducer_1.asyncFinish)());
    }
    catch (error) {
        dispatch((0, asyncReducer_1.asyncError)(error));
        throw error;
    }
};
exports.deleteProductAsync = deleteProductAsync;
const clearProduct = () => {
    return {
        type: productConstants_1.CLEAR_PRODUCT,
    };
};
exports.clearProduct = clearProduct;
//# sourceMappingURL=productActions.js.map