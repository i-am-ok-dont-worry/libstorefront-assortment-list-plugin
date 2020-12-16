import { TaskQueue } from '@grupakmk/libstorefront';
export declare class AssortmentListDao {
    private taskQueue;
    /**
     * Returns assortment list from API
     * @param {string} customerId
     * @param {string} storeCode
     * @param {string} customerToken
     */
    getAssortmentList(customerId: string, storeCode?: string, customerToken?: string): Promise<import("@grupakmk/libstorefront").Task>;
    /**
     * Invalidates assortment list cache
     * @param {string} customerId
     * @param {string} customerToken
     */
    invalidateAssortmentList(customerId: string, customerToken?: string): Promise<import("@grupakmk/libstorefront").Task>;
    constructor(taskQueue: TaskQueue);
}
