import { injectable, inject } from 'inversify';
import { AbstractStore, HttpStatus, LibstorefrontInnerState, Logger } from '@grupakmk/libstorefront';
import { AssortmentProduct } from '../types';
import { AssortmentListThunks } from '../store/assortment.thunks';
import { AssortmentListDao } from '../dao';

@injectable()
export class AssortmentListService {

    /**
     * Returns assortment list for selected customer
     * @param {string} customerId
     * @returns {Promise<AssertmentProduct[]>} products
     */
    public getAssortmentList (customerId?: string): Promise<AssortmentProduct[]> {
        return this.store.dispatch(AssortmentListThunks.getAssortmentList(customerId));
    }

    /**
     * Invalidates assortment list cache for customer
     * @returns {Promise<void>}
     */
    public async invalidateAssortmentList (): Promise<void> {
        const userId = this.store.getState().user.current.id;
        const userToken = this.store.getState().user.token;
        if (!userToken) { return Promise.resolve(); }
        if (!userId || userId === '') { return Promise.resolve(); }
        try {
            const response = await this.dao.invalidateAssortmentList(userId, userToken);
            if (response.code === HttpStatus.OK) { return Promise.resolve(); }
            else { throw new Error(response.result); }
        } catch (e) {
            Logger.error(`Cannot invalidate: `, e.message);
            return Promise.reject();
        }
    }

    public constructor (
        @inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>,
        @inject(AssortmentListDao) private dao: AssortmentListDao
    ) {}
}
