import express from "express";
import TestimonialsModel from "../models/Testimonials";

const router = express.Router();

router.get("/testimonials", async (req: any, res: any) => {
  try {
    const testimonials = await TestimonialsModel.find();
    console.log("testimonials", testimonials);
    res.status(200).json({ testimonials });
  } catch (error) {
    console.error("Error getting testimonials:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
