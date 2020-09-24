import mongoose, { Schema } from 'mongoose';

import { recipientSchema } from './recipient';

export interface SurveyModel {
  title: string;
  subject: string;
  body: string;
  recipients: string[];
}

const surveySchema = new Schema<SurveyModel>({
  title: String,
  subject: String,
  body: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('surveys', surveySchema);
