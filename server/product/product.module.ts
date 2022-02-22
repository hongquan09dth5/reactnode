import { ProductController } from "./product.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [ProductController],
})
export class ProductModule {}
