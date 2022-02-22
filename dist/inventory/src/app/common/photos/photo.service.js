"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSingleProductImage = void 0;
const agent_1 = require("./../../api/agent");
const updateSingleProductImage = async (files) => {
    try {
        const formData = new FormData();
        formData.append("file", files[0].originFileObj);
        return await agent_1.default.Uploader.upload(formData);
    }
    catch (error) {
        console.log("error", error);
        throw error;
    }
};
exports.updateSingleProductImage = updateSingleProductImage;
//# sourceMappingURL=photo.service.js.map