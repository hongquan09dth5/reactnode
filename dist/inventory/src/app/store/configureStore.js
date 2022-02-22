"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.history = void 0;
const redux_1 = require("redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const history_1 = require("history");
const redux_thunk_1 = require("redux-thunk");
const rootReducer_1 = require("./rootReducer");
exports.history = (0, history_1.createBrowserHistory)();
const store = (0, redux_1.createStore)((0, rootReducer_1.default)(exports.history), (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
exports.default = store;
//# sourceMappingURL=configureStore.js.map