"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftSider = exports.LogoText = exports.Logo = void 0;
const antd_1 = require("antd");
const styled_components_1 = require("styled-components");
exports.Logo = styled_components_1.default.div `
  height: 64px;
  background-color: #001529;
  color: #fff;
`;
exports.LogoText = styled_components_1.default.a `
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
  font-size: 20px;
  color: #fff !important;
`;
exports.LeftSider = (0, styled_components_1.default)(antd_1.Layout.Sider) `
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
`;
//# sourceMappingURL=SideBar.styled.js.map