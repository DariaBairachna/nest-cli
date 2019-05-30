import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const AuthorInBookSchema = new mongoose.Schema({
    bookId: String,
    authorId: String,
});

export interface AuthorInBookEntity extends Document {
    bookId: string;
    authorId: string;
}
