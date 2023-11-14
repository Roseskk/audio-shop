import {Product} from "@/types/types";

export function isOdd(num: number): boolean {
    return num % 2 !== 0
}

export function getTitle(product: Product) {
    return typeof product.title === 'string' ? product.title : product.title.rendered;
}
