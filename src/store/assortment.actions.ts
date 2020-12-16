import { AssortmentProduct } from '../types';

export namespace AssortmentListActions {
    export const SN_ASSORTMENT_LIST = 'assortment-list';

    export const SET_ASSORTMENT_LIST = SN_ASSORTMENT_LIST + '/SET_LIST';
    export const setAssortmentList = (products: AssortmentProduct[]) => ({
        type: SET_ASSORTMENT_LIST,
        payload: products
    });

    export const SET_ASSORTMENT_IS_LOADING = SN_ASSORTMENT_LIST + '/IS_LOADING';
    export const setAssortmentIsLoading = (isLoading: boolean) => ({
        type: SET_ASSORTMENT_IS_LOADING,
        payload: isLoading
    });
}
