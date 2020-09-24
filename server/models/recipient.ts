import { Schema } from 'mongoose';

export interface RecipientModel {
  email: string;
  responded: boolean;
}

export const recipientSchema = new Schema<RecipientModel>({
  email: String,
  responded: { type: Boolean, default: false },
});
