import { AssortmentListActions} from './assortment.actions';
import { IOCContainer, LibstorefrontInnerState, Logger, StoreViewHandler } from '@grupakmk/libstorefront';
import { AssortmentListDao } from '../dao';

export namespace AssortmentListThunks {
    export const getAssortmentList = (customerId: string) => {
        return async (dispatch, getState: () => LibstorefrontInnerState) => {
            try {
                await dispatch(AssortmentListActions.setAssortmentIsLoading(true));
                const storeCode = StoreViewHandler.currentStoreView().general.store_code;
                const userId = getState().user.current.id;
                const userToken = getState().user.token;
                if (!userId && !customerId) { throw new Error('Cannot load assortment list. User is not defined'); }

                const response = await IOCContainer.get(AssortmentListDao).getAssortmentList(customerId || userId, storeCode, userToken);
                if (response && response.result) {
                    await dispatch(AssortmentListActions.setAssortmentList(response.result));
                }
                await dispatch(AssortmentListActions.setAssortmentIsLoading(false));
                return response.result;
            } catch (e) {
                Logger.error(`Cannot load assortment list: `, e);
                await dispatch(AssortmentListActions.setAssortmentIsLoading(false));
                return null;
            }
        };
    }
}
