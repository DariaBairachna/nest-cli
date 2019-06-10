import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: String,
    publishing: String,
    year: String,
    price: String,
});

export interface BookEntity {
    title: string;
    publishing: string;
    year: string;
    price: string;
}

export interface BookDocument extends Document, BookEntity {
}
