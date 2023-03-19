import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NavService } from './nav.service';
import { CreateNavDto } from './dto/create-nav.dto';
import { UpdateNavDto } from './dto/update-nav.dto';

@Controller('nav')
export class NavController {
  constructor(private readonly navService: NavService) {}

  @Post()
  create(@Body() createNavDto: CreateNavDto) {
    return this.navService.create(createNavDto);
  }

  @Get()
  findAll() {
    return this.navService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.navService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNavDto: UpdateNavDto) {
    return this.navService.update(+id, updateNavDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.navService.remove(+id);
  }
}
