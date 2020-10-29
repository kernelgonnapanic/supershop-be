import Faker from "faker";
import { define } from "typeorm-seeding";
import { Product } from "../../entity/Product";

define(Product, (faker: typeof Faker) => {
  const product = new Product();
  product.name = faker.random.words(3);
  product.description = faker.lorem.paragraphs(2);
  product.price = faker.random.number(3000);
  return product;
});
