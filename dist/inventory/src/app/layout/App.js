"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./styles.css");
const antd_1 = require("antd");
const react_router_dom_1 = require("react-router-dom");
const HomePage_1 = require("../../features/home/HomePage");
const ProductDashboard_1 = require("../../features/product/productDashboard/ProductDashboard");
const SiderBar_1 = require("../../features/sidebar/SiderBar");
const ProductDetailedPage_1 = require("../../features/product/productDetailed/ProductDetailedPage");
const ProductForm_1 = require("../../features/product/productForm/ProductForm");
const App_styled_1 = require("./App.styled");
const { Footer } = antd_1.Layout;
const App = () => (<>
    <div>
      <App_styled_1.MainLayout hasSider>
        <SiderBar_1.default />
        <App_styled_1.ContentLayout className="site-layout">
          <App_styled_1.MainHeader className="site-layout-background"/>
          <App_styled_1.MainContent>
            <div className="site-layout-background" style={{ padding: 24 }}>
              <react_router_dom_1.Route path="/" component={HomePage_1.default} exact/>
              <react_router_dom_1.Route path="/products" component={ProductDashboard_1.default}/>
              <react_router_dom_1.Route path="/product/:id" component={ProductDetailedPage_1.default}/>
              <react_router_dom_1.Route path={['/createProduct', '/updateProduct/:id']} component={ProductForm_1.default}/>
            </div>
          </App_styled_1.MainContent>
          <Footer style={{ textAlign: "center" }}></Footer>
        </App_styled_1.ContentLayout>
      </App_styled_1.MainLayout>
    </div>
  </>);
exports.default = App;
//# sourceMappingURL=App.js.map