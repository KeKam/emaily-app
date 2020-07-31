import mongoose, { Schema } from 'mongoose';

interface User {
  googleId: string;
}

const userSchema = new Schema<User>({
  googleId: String,
});

mongoose.model('users', userSchema);
