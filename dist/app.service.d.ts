export declare class AppService {
    getHello(): string;
    getProducts(): {
        id: number;
        name: string;
    }[];
    getCategories(): {
        id: number;
        name: string;
    }[];
    getMarcas(): {
        id: number;
        name: string;
    }[];
    getPais(): {
        id: number;
        name: string;
    }[];
    getGender(): {
        id: number;
        name: string;
    }[];
    createProduct(): {
        id: number;
        name: string;
    };
    createCategory(): {
        id: number;
        name: string;
    };
    createMarca(): {
        id: number;
        name: string;
    };
    createPais(): {
        id: number;
        name: string;
    };
    createGender(): {
        id: number;
        name: string;
    };
}
