import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
/**
 * Plugin provides support for fetching assortment list from Magento
 * and invalidating server side cache.
 * It uses internal LSF hook to listen to place order hook to invalidate cache
 * as every time order is placed, the assortment list change for the customer.
 */
export declare const AssortmentListPlugin: LibstorefrontPlugin;
