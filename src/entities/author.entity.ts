
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ObjectID } from 'bson';

export const AuthorSchema = new mongoose.Schema({

    name: String,
});

export interface AuthorEntity {
    id?: any;
    name: string;
}
export interface AuthorDocument extends Document, AuthorEntity {
}
