"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncError = exports.asyncFinish = exports.asyncStart = void 0;
const ASYNC_START = "ASYNC_START";
const ASYNC_FINISH = "ASYNC_FINISH";
const ASYNC_ERROR = "ASYNC_ERROR";
const asyncStart = () => {
    return {
        type: ASYNC_START
    };
};
exports.asyncStart = asyncStart;
const asyncFinish = () => {
    return {
        type: ASYNC_FINISH
    };
};
exports.asyncFinish = asyncFinish;
const asyncError = (error) => {
    return {
        type: ASYNC_ERROR,
        payload: error,
    };
};
exports.asyncError = asyncError;
const defaultState = {
    loading: false,
    error: null,
};
const asyncReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ASYNC_START:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case ASYNC_FINISH:
            return Object.assign(Object.assign({}, state), { loading: false });
        case ASYNC_ERROR:
            return Object.assign(Object.assign({}, state), { loading: false, error: payload });
        default:
            return state;
    }
};
exports.default = asyncReducer;
//# sourceMappingURL=asyncReducer.js.map