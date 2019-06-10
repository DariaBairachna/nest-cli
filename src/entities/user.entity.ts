import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
});

export interface UserEntity{
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface UserDocument extends Document, UserEntity {
}
