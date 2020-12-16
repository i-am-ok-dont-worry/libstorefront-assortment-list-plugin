import { Product } from "@grupakmk/libstorefront";
export declare type AssortmentProduct = Product & {
    ordered_count: number;
    last_ordered_date: string;
};
