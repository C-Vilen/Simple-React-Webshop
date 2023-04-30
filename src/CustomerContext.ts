import { createContext } from "react";

export interface Customer {
    customerid: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    basketId: number;
}

export const CustomerContext = createContext<Customer | null>(null);
