declare const _default: {
    Products: {
        list: () => Promise<any>;
        getById: (id: number) => Promise<any>;
        update: (req: any) => Promise<any>;
        create: (req: any) => Promise<any>;
        delete: (id: number) => Promise<any>;
    };
    Uploader: {
        upload: (req: any) => Promise<any>;
    };
};
export default _default;
