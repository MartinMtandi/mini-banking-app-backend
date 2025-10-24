import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class RefreshToken extends Document {
  @Prop({ required: true })
  accessToken: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  userId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  expiresAt: Date;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
