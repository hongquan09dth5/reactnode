"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainContent = exports.MainHeader = exports.ContentLayout = exports.MainLayout = void 0;
const styled_components_1 = require("styled-components");
const antd_1 = require("antd");
const { Header, Content } = antd_1.Layout;
exports.MainLayout = (0, styled_components_1.default)(antd_1.Layout) `
  min-height: 100vh;
`;
exports.ContentLayout = (0, styled_components_1.default)(antd_1.Layout) `
  margin-left: 0;
  
  @media (min-width: 991px) {
    margin-left: 200px;
  }
`;
exports.MainHeader = (0, styled_components_1.default)(Header) `
  padding: 0;
`;
exports.MainContent = (0, styled_components_1.default)(Content) `
  margin: 24px 16px 0;
  overflow: initial;
`;
//# sourceMappingURL=App.styled.js.map