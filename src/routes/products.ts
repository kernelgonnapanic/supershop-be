import logger from "loglevel";
import express, { Request, Response } from "express";

const products = [
  {
    id: 1,
    name: "Nananan",
    description: "Longer description it is",
  },
  {
    id: 2,
    name: "Foobar",
    description: "Longer description it is",
  },
];

function getProductRoutes() {
  const router = express.Router();
  router.get("/", listProducts);
  return router;
}
// all the controller and utility functions here:
async function listProducts(req: Request, res: Response) {
  logger.info("[products] list");
  res.send(products);
}

export { getProductRoutes };
