import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;
export const BookSchema = new mongoose.Schema({
    title: String,
    publishing: String,
    year: String,
    price: String,
    authorId: [ObjectId],
});

export interface BookEntity {
    id?: any;
    title: string;
    publishing: string;
    year: string;
    price: string;
}

export interface BookDocument extends Document, BookEntity {
}
