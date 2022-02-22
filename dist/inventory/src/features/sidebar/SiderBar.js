"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const antd_1 = require("antd");
const SideBar_styled_1 = require("./SideBar.styled");
const SideBar = () => (<>
    <SideBar_styled_1.LeftSider breakpoint="lg" collapsedWidth="0">
      <react_router_dom_1.Link to="/">
        <SideBar_styled_1.Logo className="logo ant-row">
          <SideBar_styled_1.LogoText>BADMINTON</SideBar_styled_1.LogoText>
        </SideBar_styled_1.Logo>
      </react_router_dom_1.Link>

      <antd_1.Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <antd_1.Menu.Item key="1">
          <react_router_dom_1.NavLink to="/products"> Product</react_router_dom_1.NavLink>
        </antd_1.Menu.Item>
      </antd_1.Menu>
    </SideBar_styled_1.LeftSider>
  </>);
exports.default = SideBar;
//# sourceMappingURL=SiderBar.js.map