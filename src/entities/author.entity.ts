
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
    name: String,
});

export interface AuthorEntity extends Document {
    name: string;
}
