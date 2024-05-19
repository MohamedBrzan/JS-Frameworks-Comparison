import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

@Schema()
export class Works {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export type WorksDocument = Works & mongoose.Document;
export const WorksSchema = SchemaFactory.createForClass(Works);
