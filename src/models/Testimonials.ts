import mongoose, { Schema, model, Document } from "mongoose";

interface Testimonial {
  _id: string;
  testimonial_id: number;
  content: string;
  author_img_url: string;
  author_name: string;
  author_designation: string;
  author_company_img_url: string;
}

const testimonialSchema = new Schema<Testimonial>({
  _id: { type: String, required: true },
  testimonial_id: { type: Number, required: true },
  content: { type: String, required: false },
  author_img_url: { type: String, required: false },
  author_name: { type: String, required: false },
  author_designation: { type: String, required: false },
  author_company_img_url: { type: String, required: false },
});

const TestimonialsModel = mongoose.model<Testimonial>(
  "testimonials",
  testimonialSchema
);

export default TestimonialsModel;
