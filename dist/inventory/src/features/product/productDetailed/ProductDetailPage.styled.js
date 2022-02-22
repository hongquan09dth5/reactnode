"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarWithSmallDevice = exports.ToolbarWithBigDevice = exports.ImageWrapper = exports.ColumnHeader = exports.ShortDescription = exports.Heading = void 0;
const antd_1 = require("antd");
const styled_components_1 = require("styled-components");
exports.Heading = styled_components_1.default.h1 `
  font-size: 1.6rem;
  margin-bottom: 0;

  @media (min-width: 991px) {
    font-size: 3.6rem;
  }
`;
exports.ShortDescription = styled_components_1.default.p `
  margin-bottom: 25px;

  @media (min-width: 991px) {
    font-size: 1.25rem;
  }
`;
exports.ColumnHeader = styled_components_1.default.td `
  width: 200px;
  padding: 12px 0;
`;
exports.ImageWrapper = styled_components_1.default.div `
  display: flex;
  justify-content: center;
`;
exports.ToolbarWithBigDevice = (0, styled_components_1.default)(antd_1.Space) `
  display: none;
  @media (min-width: 991px) {
    display: inline-flex;
  }
`;
exports.ToolbarWithSmallDevice = (0, styled_components_1.default)(antd_1.Space) `
  display: none;
  @media (max-width: 991px) {
    display: inline-flex;
  }
`;
//# sourceMappingURL=ProductDetailPage.styled.js.map