"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const react_1 = require("react");
const constants_1 = require("./../../../app/common/constants");
const antd_1 = require("antd");
const Avatar = ({ imageUrl }) => {
    return (<div>
      <antd_1.Image width={100} src={`${constants_1.SERVER_URL}/${imageUrl}`}/>
    </div>);
};
exports.Avatar = Avatar;
//# sourceMappingURL=Avatar.js.map