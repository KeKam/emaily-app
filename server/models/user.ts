import mongoose, { Schema } from 'mongoose';

export interface UserModel {
  googleId: string;
  credits: number;
}

const userSchema = new Schema<UserModel>({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model('users', userSchema);
