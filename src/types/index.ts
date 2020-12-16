import { Product } from "@grupakmk/libstorefront";

export type AssortmentProduct = Product & { ordered_count: number, last_ordered_date: string };
