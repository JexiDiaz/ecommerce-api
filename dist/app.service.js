"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
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
        return { id: 3, name: "Product 1" };
    }
    createCategory() {
        return { id: 3, name: "Category 1" };
    }
    createMarca() {
        return { id: 3, name: "Marca 1" };
    }
    createPais() {
        return { id: 3, name: "Pais 1" };
    }
    createGender() {
        return { id: 3, name: "Genero" };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map