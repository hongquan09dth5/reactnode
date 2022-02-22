export declare const asyncStart: () => {
    type: string;
};
export declare const asyncFinish: () => {
    type: string;
};
export declare const asyncError: (error: any) => {
    type: string;
    payload: any;
};
declare const asyncReducer: (state: {
    loading: boolean;
    error: any;
}, { type, payload }: {
    type: any;
    payload: any;
}) => {
    loading: boolean;
    error: any;
};
export default asyncReducer;
