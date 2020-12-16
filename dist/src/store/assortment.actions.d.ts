import { AssortmentProduct } from '../types';
export declare namespace AssortmentListActions {
    const SN_ASSORTMENT_LIST = "assortment-list";
    const SET_ASSORTMENT_LIST: string;
    const setAssortmentList: (products: AssortmentProduct[]) => {
        type: string;
        payload: AssortmentProduct[];
    };
    const SET_ASSORTMENT_IS_LOADING: string;
    const setAssortmentIsLoading: (isLoading: boolean) => {
        type: string;
        payload: boolean;
    };
}
