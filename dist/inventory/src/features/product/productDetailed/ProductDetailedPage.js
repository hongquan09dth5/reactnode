"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const hooks_1 = require("./../../../app/hook/hooks");
const productActions_1 = require("../productActions");
const antd_1 = require("antd");
const ToolBar_styled_1 = require("../../../app/common/styled/ToolBar.styled");
const react_number_format_1 = require("react-number-format");
const react_router_dom_1 = require("react-router-dom");
const icons_1 = require("@ant-design/icons");
const ProductDetailPage_styled_1 = require("./ProductDetailPage.styled");
const constants_1 = require("./../../../app/common/constants");
const LoadingComponent_1 = require("../../../app/layout/LoadingComponent");
const { Text } = antd_1.Typography;
const { confirm } = antd_1.Modal;
const ProductDetailedPage = ({ match, history }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { product } = (0, hooks_1.useAppSelector)((state) => state.product);
    const { loading } = (0, hooks_1.useAppSelector)((state) => state.async);
    (0, react_1.useEffect)(() => {
        dispatch((0, productActions_1.fetchProductsByIdAsync)(match.params.id));
    }, [dispatch, match.params.id]);
    const showConfirm = () => {
        confirm({
            title: "Do you want to delete this product?",
            icon: <icons_1.ExclamationCircleOutlined />,
            content: "Product name: " + product.name,
            onOk() {
                onConfirmDeleteProduct();
            },
        });
    };
    const onConfirmDeleteProduct = () => {
        try {
            dispatch((0, productActions_1.deleteProductAsync)(product.id));
            history.push("/products");
            openNotification();
        }
        catch (error) {
            openNotification(error);
        }
    };
    const openNotification = (error) => {
        if (!error) {
            antd_1.notification["success"]({
                message: "Success",
                description: `You have deleted ${product.name}.`,
            });
        }
        else {
            antd_1.notification["error"]({
                message: "Error",
                description: "Please try again.",
            });
        }
    };
    if (loading)
        return <LoadingComponent_1.default />;
    return (<>
      {product && (<>
          <antd_1.Card>
            <antd_1.Row>
              <antd_1.Col span={24}>
                <ToolBar_styled_1.ToolbarContainer>
                  <ProductDetailPage_styled_1.Heading>{product.name}</ProductDetailPage_styled_1.Heading>
                  <ProductDetailPage_styled_1.ToolbarWithSmallDevice>
                    <react_router_dom_1.Link to="/products">
                      <antd_1.Button type="default" icon={<icons_1.RollbackOutlined />}></antd_1.Button>
                    </react_router_dom_1.Link>
                    <react_router_dom_1.Link to={`/updateProduct/${product.id}`}>
                      <antd_1.Button type="primary" icon={<icons_1.EditOutlined />}></antd_1.Button>
                    </react_router_dom_1.Link>

                    <antd_1.Button type="default" icon={<icons_1.DeleteOutlined />} onClick={() => showConfirm()}></antd_1.Button>
                  </ProductDetailPage_styled_1.ToolbarWithSmallDevice>
                  <ProductDetailPage_styled_1.ToolbarWithBigDevice>
                    <react_router_dom_1.Link to={`/updateProduct/${product.id}`}>
                      <antd_1.Button type="primary" icon={<icons_1.EditOutlined />}>
                        Edit
                      </antd_1.Button>
                    </react_router_dom_1.Link>

                    <antd_1.Button type="default" icon={<icons_1.DeleteOutlined />} onClick={() => showConfirm()}>
                      Delete
                    </antd_1.Button>
                  </ProductDetailPage_styled_1.ToolbarWithBigDevice>
                </ToolBar_styled_1.ToolbarContainer>
              </antd_1.Col>
              <antd_1.Col span={24}>
                <ProductDetailPage_styled_1.ShortDescription>{product.description}</ProductDetailPage_styled_1.ShortDescription>
              </antd_1.Col>
              <antd_1.Col lg={11} sm={24}>
                <ProductDetailPage_styled_1.ImageWrapper>
                  <antd_1.Image src={`${constants_1.SERVER_URL}/${product.imageurl}`}/>
                </ProductDetailPage_styled_1.ImageWrapper>
              </antd_1.Col>
              <antd_1.Col lg={11} style={{ paddingLeft: 20 }} sm={24}>
                <table>
                  <tbody>
                    <tr>
                      <ProductDetailPage_styled_1.ColumnHeader>Flex:</ProductDetailPage_styled_1.ColumnHeader>
                      <td>{product.flex}</td>
                    </tr>
                    <tr>
                      <ProductDetailPage_styled_1.ColumnHeader>Frame:</ProductDetailPage_styled_1.ColumnHeader>
                      <td>{product.frame}</td>
                    </tr>
                    <tr>
                      <ProductDetailPage_styled_1.ColumnHeader>Weight/Grip:</ProductDetailPage_styled_1.ColumnHeader>
                      <td>{product.weight}</td>
                    </tr>
                    <tr>
                      <ProductDetailPage_styled_1.ColumnHeader>Stringing recommend:</ProductDetailPage_styled_1.ColumnHeader>
                      <td>{product.stringing}</td>
                    </tr>
                    <tr>
                      <ProductDetailPage_styled_1.ColumnHeader>Color(s):</ProductDetailPage_styled_1.ColumnHeader>
                      <td>{product.colors}</td>
                    </tr>
                    <tr>
                      <ProductDetailPage_styled_1.ColumnHeader>Made in:</ProductDetailPage_styled_1.ColumnHeader>
                      <td>{product.origin}</td>
                    </tr>
                    <tr>
                      <ProductDetailPage_styled_1.ColumnHeader>Item Code:</ProductDetailPage_styled_1.ColumnHeader>
                      <td>{product.itemcode}</td>
                    </tr>
                    <tr>
                      <ProductDetailPage_styled_1.ColumnHeader>Price:</ProductDetailPage_styled_1.ColumnHeader>
                      <td>
                        <Text type="danger">
                          <react_number_format_1.default value={product.price} displayType={"text"} thousandSeparator={true} prefix={"$"}/>
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}>
                        <react_router_dom_1.Link to="/products">
                          <antd_1.Button type="default" icon={<icons_1.RollbackOutlined />}>
                            Back to list
                          </antd_1.Button>
                        </react_router_dom_1.Link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </antd_1.Col>
            </antd_1.Row>
          </antd_1.Card>
        </>)}
    </>);
};
exports.default = ProductDetailedPage;
//# sourceMappingURL=ProductDetailedPage.js.map