import {Category} from "./category";

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    categories: Category[];
}