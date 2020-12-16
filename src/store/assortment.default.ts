import { AssortmentProduct } from '../types';

export const AssortmentsDefaultState: AssortmentListModuleState = {
    items: [],
    isLoading: false
};

export interface AssortmentListModuleState {
    items: AssortmentProduct[],
    isLoading: boolean
}
