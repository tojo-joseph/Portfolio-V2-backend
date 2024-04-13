import express from "express";

const Testimonials = require("./Testimonials");

const router = express.Router();

router.use("/testimonials", Testimonials);

const devRoutes = [
  {
    path: "",
    route: Testimonials,
  },
];

devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export { router };
