import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("products")
  getProducts() {
    return this.appService.getProducts();
  }

  @Get("categories")
  getCategories() {
    return this.appService.getCategories();
  }

  @Post("products")
  createProduct() {
    return this.appService.createProduct();
  }

  @Get("marcas")
  getMarca() {
    return this.appService.getMarcas();
  }

  @Get("pais")
  getPais() {
    return this.appService.getPais();
  }

  @Get("Genero")
  getGender() {
    return this.appService.getGender();
  }
}