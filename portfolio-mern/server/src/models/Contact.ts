import { Schema, model } from "mongoose";

export interface ContactDocument {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<ContactDocument>(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    subject: { type: String, trim: true, maxlength: 120, default: "Portfolio enquiry" },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
  },
  { timestamps: true },
);

const Contact = model<ContactDocument>("Contact", contactSchema);

export default Contact;
