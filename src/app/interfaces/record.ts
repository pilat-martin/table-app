import { Status } from "../enums/status.enum";

export interface Record {
    name: String,
    email: String, 
    item: String,
    date: Date,
    status: Status,
    price: String
}
