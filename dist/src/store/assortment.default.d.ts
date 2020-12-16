import { AssortmentProduct } from '../types';
export declare const AssortmentsDefaultState: AssortmentListModuleState;
export interface AssortmentListModuleState {
    items: AssortmentProduct[];
    isLoading: boolean;
}
