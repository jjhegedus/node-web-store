import { CartItem } from '../cart/cart-item';

export class PurchaseInfo {
    nameoncard: string;
    ccnumber: string;
    ccexpmonth: number;
    ccexpyear: number;
    ccv2: string;
    address_line1: string;
    address_line2: string;
    address_city: string;
    address_state: string;
    address_zip: string;
    address_country: string;
    cartItems: CartItem[];
    grandTotal: number;
    cardToken: string;
}