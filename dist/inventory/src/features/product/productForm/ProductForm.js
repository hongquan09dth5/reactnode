"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("react");
const hooks_1 = require("./../../../app/hook/hooks");
const antd_1 = require("antd");
const productActions_1 = require("./../productActions");
const ProductForm_styled_1 = require("./ProductForm.styled");
const InputNumber_styled_1 = require("../../../app/common/styled/InputNumber.styled");
const react_router_dom_1 = require("react-router-dom");
const Avatar_1 = require("./../../../app/common/photos/Avatar");
const LoadingComponent_1 = require("../../../app/layout/LoadingComponent");
const ProductForm = ({ match, history, location }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { product } = (0, hooks_1.useAppSelector)((state) => state.product);
    const [initLoading, setInitLoading] = (0, react_1.useState)(true);
    const [actionLoading, setActionLoading] = (0, react_1.useState)(false);
    const isCreating = location.pathname === "/createProduct";
    (0, react_2.useEffect)(() => {
        if (!isCreating) {
            const fetchProductById = async () => {
                await dispatch((0, productActions_1.fetchProductsByIdAsync)(match.params.id)).then(() => setInitLoading(false));
            };
            fetchProductById();
            return;
        }
        dispatch((0, productActions_1.clearProduct)());
        setInitLoading(false);
    }, [dispatch, match.params.id]);
    const initialValues = product && !isCreating
        ? product
        : {
            id: "",
            description: "",
            price: "",
            imageurl: "",
            name: "",
            flex: "",
            frame: "",
            weight: "",
            stringing: "",
            colors: "",
            itemcode: "",
            origin: "",
            producttype: "",
            productbrand: "",
            files: [],
        };
    const validations = {
        name: [
            { required: true, message: "Please enter product name." },
            {
                max: 100,
                message: "Please enter less than or equal to 100 characters.",
            },
        ],
        price: [{ required: true, message: "Please enter price." }],
        flex: [
            {
                max: 15,
                message: "Please enter less than or equal to 15 characters.",
            },
        ],
        frame: [
            {
                max: 125,
                message: "Please enter less than or equal to 125 characters.",
            },
        ],
        weight: [
            {
                max: 225,
                message: "Please enter less than or equal to 225 characters.",
            },
        ],
        stringing: [
            {
                max: 225,
                message: "Please enter less than or equal to 225 characters.",
            },
        ],
        colors: [
            {
                max: 225,
                message: "Please enter less than or equal to 225 characters.",
            },
        ],
        origin: [
            {
                max: 25,
                message: "Please enter less than or equal to 25 characters.",
            },
        ],
        itemcode: [
            {
                max: 10,
                message: "Please enter less than or equal to 10 characters.",
            },
        ],
        files: [{ required: true, message: "Please upload avatar." }],
    };
    const openNotification = (error) => {
        if (!error) {
            const message = isCreating
                ? "You have created a product successfully !"
                : "You have updated the product successfully !";
            antd_1.notification["success"]({
                message: "Success",
                description: message,
            });
        }
        else {
            antd_1.notification["error"]({
                message: "Error",
                description: "Please try again.",
            });
        }
    };
    const onFinish = async (values) => {
        setActionLoading(true);
        try {
            const createOrUpdate = async () => product
                ? dispatch((0, productActions_1.updateProductAsync)(Object.assign({ id: match.params.id, imageurl: product.imageurl }, values)))
                : dispatch((0, productActions_1.createProductAsync)(values));
            await createOrUpdate().then(() => {
                openNotification();
                history.push("/products");
                setActionLoading(false);
            });
        }
        catch (error) {
            openNotification(error);
            setActionLoading(false);
        }
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };
    const avatarCard = product ? <Avatar_1.Avatar imageUrl={product.imageurl}/> : null;
    const uploadButton = (<div>
      <div className="ant-upload-text">Upload</div>
    </div>);
    const getFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const beforeUpload = (file) => {
        const isValidFormatImage = file.type === "image/jpeg" ||
            file.type === "image/png" ||
            file.type === "image/jpg";
        if (!isValidFormatImage) {
            antd_1.message.error("You can only upload JPG/JPEG/PNG file!");
            return antd_1.Upload.LIST_IGNORE;
        }
        return false;
    };
    if (initLoading) {
        return <LoadingComponent_1.default />;
    }
    else {
        return (<>
        <antd_1.Card>
          <antd_1.Form layout="vertical" initialValues={initialValues} onFinish={onFinish}>
            <ProductForm_styled_1.FormItem label="Product Name" name="name" rules={validations.name}>
              <antd_1.Input />
            </ProductForm_styled_1.FormItem>
            <ProductForm_styled_1.FormItem label="Product Description" name="description">
              <antd_1.Input.TextArea rows={4}/>
            </ProductForm_styled_1.FormItem>

            <ProductForm_styled_1.FormItem label="Image" name="files" getValueFromEvent={getFile} valuePropName="fileList" rules={isCreating
                ? validations.files
                : [{ required: false, message: "" }]}>
              <antd_1.Upload maxCount={1} listType="picture-card" beforeUpload={beforeUpload} onPreview={onPreview}>
                {uploadButton}
              </antd_1.Upload>
            </ProductForm_styled_1.FormItem>
            {avatarCard}
            <ProductForm_styled_1.FormItem label="Price" name="price" rules={validations.price}>
              <InputNumber_styled_1.FullWithInputNumber />
            </ProductForm_styled_1.FormItem>
            <ProductForm_styled_1.FormItem label="Flex" name="flex" rules={validations.flex}>
              <antd_1.Input />
            </ProductForm_styled_1.FormItem>
            <ProductForm_styled_1.FormItem label="Frame" name="frame" rules={validations.frame}>
              <antd_1.Input />
            </ProductForm_styled_1.FormItem>
            <ProductForm_styled_1.FormItem label="Weight / Grip" name="weight" rules={validations.weight}>
              <antd_1.Input />
            </ProductForm_styled_1.FormItem>
            <ProductForm_styled_1.FormItem label="Stringing Advice" name="stringing" rules={validations.stringing}>
              <antd_1.Input />
            </ProductForm_styled_1.FormItem>
            <ProductForm_styled_1.FormItem label="Color(s)" name="colors" rules={validations.colors}>
              <antd_1.Input />
            </ProductForm_styled_1.FormItem>
            <ProductForm_styled_1.FormItem label="Made in" name="origin" rules={validations.origin}>
              <antd_1.Input />
            </ProductForm_styled_1.FormItem>
            <ProductForm_styled_1.FormItem label="Item Code" name="itemcode" rules={validations.itemcode}>
              <antd_1.Input />
            </ProductForm_styled_1.FormItem>
            <antd_1.Form.Item wrapperCol={{ offset: 10, span: 14 }}>
              <ProductForm_styled_1.SubmitButton type="primary" htmlType="submit" loading={actionLoading}>
                {isCreating ? "Create" : "Update"}
              </ProductForm_styled_1.SubmitButton>
              <react_router_dom_1.Link to="/products">
                <antd_1.Button type="default">Back</antd_1.Button>
              </react_router_dom_1.Link>
            </antd_1.Form.Item>
          </antd_1.Form>
        </antd_1.Card>
      </>);
    }
};
exports.default = ProductForm;
//# sourceMappingURL=ProductForm.js.map