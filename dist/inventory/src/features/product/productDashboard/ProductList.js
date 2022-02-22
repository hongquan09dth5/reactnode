"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../../app/hook/hooks");
const productActions_1 = require("../productActions");
const react_number_format_1 = require("react-number-format");
const icons_1 = require("@ant-design/icons");
const constants_1 = require("./../../../app/common/constants");
const ProductListToolbar_1 = require("./ProductListToolbar");
const { confirm } = antd_1.Modal;
const ProductList = ({ products }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { loading } = (0, hooks_1.useAppSelector)((state) => state.async);
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 300,
            render: (text, record) => (<react_router_dom_1.Link to={`/product/${record.id}`}>{text}</react_router_dom_1.Link>),
        },
        {
            title: "Image",
            dataIndex: "imageurl",
            key: "imageurl",
            width: 120,
            render: (text) => (<antd_1.Image width={100} src={`${constants_1.SERVER_URL}/${text}`}/>),
        },
        {
            title: "Price",
            key: "price",
            dataIndex: "price",
            width: 120,
            render: (text) => (<react_number_format_1.default value={text} displayType={"text"} thousandSeparator={true} prefix={"$"}/>),
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            responsive: ["lg"],
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (<antd_1.Space size="middle">
          <react_router_dom_1.Link to={`/updateProduct/${record.id}`}>Edit</react_router_dom_1.Link>
          <antd_1.Typography.Link onClick={() => showConfirm(record.id, record.name)}>
            Delete
          </antd_1.Typography.Link>
        </antd_1.Space>),
        },
    ];
    const showConfirm = (id, name) => {
        confirm({
            title: "Do you want to delete this product?",
            icon: <icons_1.ExclamationCircleOutlined />,
            content: "Product name: " + name,
            onOk() {
                onConfirmDeleteProduct(id, name);
            },
        });
    };
    const onConfirmDeleteProduct = async (id, name) => {
        try {
            await dispatch((0, productActions_1.deleteProductAsync)(id));
            await dispatch((0, productActions_1.fetchProductsAsync)());
            openNotification(name);
        }
        catch (error) {
            openNotification(name, error);
        }
        await dispatch((0, productActions_1.fetchProductsAsync)());
    };
    const openNotification = (name, error) => {
        if (!error) {
            antd_1.notification["success"]({
                message: "Success",
                description: `You have deleted ${name}.`,
            });
        }
        else {
            antd_1.notification["error"]({
                message: "Error",
                description: "Please try again.",
            });
        }
    };
    return (<>
      <ProductListToolbar_1.default />
      <antd_1.Table loading={loading} dataSource={products} columns={columns} rowKey="id" pagination={false}/>
      ;
    </>);
};
exports.default = ProductList;
//# sourceMappingURL=ProductList.js.map