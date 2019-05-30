import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const BookSchema = new mongoose.Schema({
    _id: String,
    title: String,
    author: Array,
    publishing: String,
    year: String,
    prise: String,
});

export interface BookEntity extends Document {
    _id: string;
    title: string;
    author: [];
    publishing: string;
    year: string;
    prise: string;
}


