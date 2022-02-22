"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const connected_react_router_1 = require("connected-react-router");
const react_redux_1 = require("react-redux");
const configureStore_1 = require("./app/store/configureStore");
const reportWebVitals_1 = require("./reportWebVitals");
const App_1 = require("./app/layout/App");
const rootElement = document.getElementById("root");
const render = () => {
    react_dom_1.default.render(<react_redux_1.Provider store={configureStore_1.default}>
      <connected_react_router_1.ConnectedRouter history={configureStore_1.history}>
      <App_1.default />
      </connected_react_router_1.ConnectedRouter>
    </react_redux_1.Provider>, rootElement);
};
render();
(0, reportWebVitals_1.default)(console.log);
//# sourceMappingURL=index.js.map