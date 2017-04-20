import { Product } from '../product/product';
import { Area } from '../area/area';
import { Customer } from '../customer/customer';

export class Invoice {
    id?: string;
    customerData?:Customer;
    customer_id?: string;
    productList?: any[] = [];
    productData?: Product[] = [];
    payment_due_date?: any;
    paid_date?: string;
    amount_due?: number;
    status?: string;    //Due / Paid / Partially Paid
    total?: number;
    discount?: number;
    invoice_created_date?: any;
    action?:string;
}