import { createLibstorefrontModule, HookType, LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { AssortmentListDao } from './dao';
import { AssortmentListService } from './service';
import { assortmentListReducer } from './store/assortment.reducer';
import { AssortmentsDefaultState } from './store/assortment.default';

/**
 * Plugin provides support for fetching assortment list from Magento
 * and invalidating server side cache.
 * It uses internal LSF hook to listen to place order hook to invalidate cache
 * as every time order is placed, the assortment list change for the customer.
 */
export const AssortmentListPlugin = ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<AssortmentListDao>(AssortmentListDao).to(AssortmentListDao);
    libstorefront.getIOCContainer().bind<AssortmentListService>(AssortmentListService).to(AssortmentListService);
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
       lsf.registerModule(createLibstorefrontModule('assortmentList', assortmentListReducer, AssortmentsDefaultState));
    });
    libstorefront.listenTo(HookType.AfterPlaceOrder, () => {
       libstorefront.get<AssortmentListService>(AssortmentListService).invalidateAssortmentList();
    });
}) as LibstorefrontPlugin;
