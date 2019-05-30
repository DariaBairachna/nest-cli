import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: String,
});

export interface BookEntity extends Document {
    title: string;
}
