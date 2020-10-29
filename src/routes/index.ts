import express from "express";
import { getProductRoutes } from "./products";

function getRoutes() {
  const router = express.Router();
  router.use("/products", getProductRoutes());
  return router;
}
export { getRoutes };
