import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query() type: string) {
    return [type];
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
