
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
    _id: String,
    name: String,
});

export interface AuthorEntity extends Document {
    _id: string;
    name: string;
}
