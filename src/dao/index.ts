import { injectable, inject } from 'inversify';
import { TaskQueue, URLTransform } from '@grupakmk/libstorefront';

@injectable()
export class AssortmentListDao {

    /**
     * Returns assortment list from API
     * @param {string} customerId
     * @param {string} storeCode
     * @param {string} customerToken
     */
    public getAssortmentList (customerId: string, storeCode?: string, customerToken?: string) {
        const params = new URLSearchParams({ ...(storeCode && { storeCode }), ...(customerToken && { token: customerToken }) });
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/assortments/' + customerId + '?' + params.toString()),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    /**
     * Invalidates assortment list cache
     * @param {string} customerId
     * @param {string} customerToken
     */
    public invalidateAssortmentList (customerId: string, customerToken?: string) {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/assortments/' + customerId + '?' + 'token=' + customerToken),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public constructor (@inject(TaskQueue) private taskQueue: TaskQueue) {}
}
