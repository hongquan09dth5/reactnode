"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const constants_1 = require("../common/constants");
axios_1.default.defaults.baseURL = constants_1.API_URL;
const responseBody = (response) => response.data;
const requests = {
    get: async (url) => await axios_1.default.get(url).then(responseBody),
    getWithParams: async (url, params) => await axios_1.default.get(url, params).then(responseBody),
    post: async (url, body) => await axios_1.default.post(url, body).then(responseBody),
    put: async (url, body) => await axios_1.default.put(url, body).then(responseBody),
    delete: async (url) => await axios_1.default.delete(url).then(responseBody),
};
const Products = {
    list: async () => {
        return await requests.get(`/product`);
    },
    getById: async (id) => {
        return await requests.get(`/product/${id}`);
    },
    update: async (req) => {
        return await requests.put(`/product/update`, req);
    },
    create: async (req) => {
        return await requests.post(`/product/create`, req);
    },
    delete: async (id) => {
        return await requests.delete(`/product/delete/${id}`);
    },
};
const Uploader = {
    upload: async (req) => {
        return await requests.post(`/upload`, req);
    },
};
exports.default = { Products, Uploader };
//# sourceMappingURL=agent.js.map