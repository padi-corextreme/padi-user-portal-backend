import { Schema, model } from "mongoose";

const interestSchema = new Schema({
  category: [{ type: String, required: true }],
  sub_category: [{ type: String }],
});

export const InterestModel = model("Interest", interestSchema, "interests");
