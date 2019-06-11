import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'bson';

export const AuthorInBookSchema = new mongoose.Schema({
    bookId: ObjectID,
    authorId: ObjectID,
});

export interface AuthorInBookEntity {
    id?: any;
    bookId: ObjectID;
    authorId: ObjectID;
}

export interface AuthorInBookEntityDocument extends Document, AuthorInBookEntity {
}
