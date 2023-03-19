import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getProducts() {
    return [
      { id: 1, name: "productos 1" },
      { id: 2, name: "productos 2" },
      { id: 3, name: "productos 3" },
      { id: 4, name: "productos 4" },
    ];
  }

  getCategories() {
    return [
      { id: 1, name: "faldas 1" },
      { id: 2, name: "vestidos 2" },
      { id: 3, name: "pantalon 3" },
      { id: 4, name: "camisas 4" },
    ];
  }

  getMarcas() {
    return [
      { id: 1, name: "jordache 1" },
      { id: 2, name: " polo 2" },
      { id: 3, name: "tommy 3" },
      { id: 4, name: "adidas " },

    ];
  }
  getPais() {
    return [
      { id: 1, name: "Nicaragua" },
      { id: 2, name: "Panama" },
      { id: 3, name: "Honduras" },

    ];
  }
  getGender() {
    return [
      { id: 1, name: "Hombre" },
      { id: 2, name: "Mujer" },
    ];
  }

  createProduct() {
    return { id: 1, name: "Product 1" };
  }

  createCategory() {
    return { id: 2, name: "Category 1" };
  }

  createMarca() {
    return { id: 3, name: "Marca 1" };
  }
  createPais() {
    return { id: 4, name: "Pais 1" };
  }

  createGender() {
    return { id: 5, name: "Genero" };
  }
}