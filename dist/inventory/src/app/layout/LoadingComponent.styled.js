"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingOutlinedIcon = exports.Spinner = void 0;
const styled_components_1 = require("styled-components");
const icons_1 = require("@ant-design/icons");
exports.Spinner = styled_components_1.default.div `
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  border-radius: 4px;
`;
exports.LoadingOutlinedIcon = (0, styled_components_1.default)(icons_1.LoadingOutlined) `
  font-size: 50px;
`;
//# sourceMappingURL=LoadingComponent.styled.js.map