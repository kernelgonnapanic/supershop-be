import logger from "loglevel";
import express, { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/Product";

function getProductRoutes() {
  const router = express.Router();
  router.get("/", getProducts);
  router.get("/:id", getProduct);
  return router;
}
// all the controller and utility functions here:
async function getProducts(req: Request, res: Response) {
  const products = await getRepository(Product).find();
  logger.info("[products] getProducts");
  res.send(products);
}

async function getProduct(req: Request, res: Response) {
  const products = await getRepository(Product).findOne(req.params.id);
  logger.info("[products] getProduct");
  res.send(products);
}

export { getProductRoutes };
