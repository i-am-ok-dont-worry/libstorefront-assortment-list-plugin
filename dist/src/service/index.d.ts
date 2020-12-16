import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
import { AssortmentProduct } from '../types';
import { AssortmentListDao } from '../dao';
export declare class AssortmentListService {
    private store;
    private dao;
    /**
     * Returns assortment list for selected customer
     * @param {string} customerId
     * @returns {Promise<AssertmentProduct[]>} products
     */
    getAssortmentList(customerId?: string): Promise<AssortmentProduct[]>;
    /**
     * Invalidates assortment list cache for customer
     * @returns {Promise<void>}
     */
    invalidateAssortmentList(): Promise<void>;
    constructor(store: AbstractStore<LibstorefrontInnerState>, dao: AssortmentListDao);
}
