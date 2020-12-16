import { Reducer } from '@grupakmk/libstorefront/dist/src/state-management/types/reducer';
import { AssortmentListModuleState, AssortmentsDefaultState } from './assortment.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { AssortmentListActions } from './assortment.actions';

export const assortmentListReducer: Reducer<AssortmentListModuleState, AnyAction> = (state = AssortmentsDefaultState, action) => {
    switch (action.type) {
        case AssortmentListActions.SET_ASSORTMENT_LIST: {
            return { ...state, items: action.payload };
        }
        case AssortmentListActions.SET_ASSORTMENT_IS_LOADING: {
            return { ...state, isLoading: action.payload };
        }
        default: return state || AssortmentsDefaultState;
    }
};
