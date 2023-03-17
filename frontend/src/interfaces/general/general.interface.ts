export interface ObjectDynamicI {
    [key: string]: any;
}


export interface ActionPayloadI<T> {
    type: string;
    payload: T;
}