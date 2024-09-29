export interface Variants {
    sku: string;
    slug: string;
    price: number;
}

export interface Product {
    name: string;
    sku: string;
    slug: string;
    description: string;
    images?: string[];
    variants?: [Variants]
}