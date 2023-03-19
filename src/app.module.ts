import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { CountriesModule } from './countries/countries.module';
import { NavModule } from './nav/nav.module';
import { BrandsModule } from './brands/brands.module';
import { PaisModule } from './pais/pais.module';

@Module({
  imports: [MenuModule, CategoriesModule, ProductsModule, CountriesModule, NavModule, BrandsModule, PaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}