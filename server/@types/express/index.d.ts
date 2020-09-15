import { UserModel } from '../../models/user';
import { Document } from 'mongoose';

declare global {
  namespace Express {
    interface User extends Document, UserModel {}
  }
}
