"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const LoadingComponent_styled_1 = require("./LoadingComponent.styled");
const antIcon = <LoadingComponent_styled_1.LoadingOutlinedIcon spin/>;
const LoadingComponent = () => {
    return (<LoadingComponent_styled_1.Spinner>
      <antd_1.Spin indicator={antIcon}/>
    </LoadingComponent_styled_1.Spinner>);
};
exports.default = LoadingComponent;
//# sourceMappingURL=LoadingComponent.js.map