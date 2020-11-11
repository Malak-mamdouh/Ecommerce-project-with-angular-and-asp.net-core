import {v4 as uuidv4} from 'uuid';

export interface IBasket{
    id: string;
    items: IBasketItem[];
}

export interface IBasketItem{
    id: number;
    productName: string;
    price: number;
    url: string;
    quantity: number;
}

export class Basket implements IBasket{
    id = uuidv4();
    items: IBasketItem[] = [];
}

export interface IBasketTotal{
    shipping: number;
    subtotal: number;
    total: number;
}
