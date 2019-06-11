import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const AuthorInBookSchema = new mongoose.Schema({
    bookId: String,
    authorId: Array,
});

export interface AuthorInBookEntity {
    bookId: string;
    authorId: string[];
}

export interface AuthorInBookEntityDocument extends Document, AuthorInBookEntity {
}