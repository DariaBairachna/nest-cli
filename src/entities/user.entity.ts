import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
    title: String,
});

export interface UserEntity extends Document {
    username: string,
    passwordHash: string,
}