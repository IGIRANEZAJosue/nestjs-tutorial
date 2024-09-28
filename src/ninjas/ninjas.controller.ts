import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas() {
    return [];
  }

  @Get('/:id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  @Post()
  addNinja() {
    return {};
  }

  @Delete('/:id')
  deleteNinja(@Param('id') id: string) {
    return { id };
  }

  @Put('/:id')
  updateNinja(@Param('id') id: string) {
    return { id };
  }
}
