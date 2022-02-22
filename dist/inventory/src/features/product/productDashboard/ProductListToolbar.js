"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const react_router_dom_1 = require("react-router-dom");
const ToolBar_styled_1 = require("../../../app/common/styled/ToolBar.styled");
const hooks_1 = require("../../../app/hook/hooks");
const productActions_1 = require("../productActions");
const icons_1 = require("@ant-design/icons");
const ProductListToolbar = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    return (<antd_1.Card>
      <ToolBar_styled_1.ToolbarContainer>
        <h3>Product List</h3>
        <antd_1.Space>
          <react_router_dom_1.Link to={`/createProduct`}>
            <antd_1.Button type="primary" icon={<icons_1.PlusOutlined />}>
              Add Product
            </antd_1.Button>
          </react_router_dom_1.Link>

          <antd_1.Button type="text" icon={<icons_1.ReloadOutlined />} onClick={() => dispatch((0, productActions_1.fetchProductsAsync)())}></antd_1.Button>
        </antd_1.Space>
      </ToolBar_styled_1.ToolbarContainer>
    </antd_1.Card>);
};
exports.default = ProductListToolbar;
//# sourceMappingURL=ProductListToolbar.js.map