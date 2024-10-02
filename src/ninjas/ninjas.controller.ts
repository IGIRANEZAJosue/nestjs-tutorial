import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './create-ninja.dto';
import { UpdateNinjaDto } from './update-ninja.dto';
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
  addNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return { name: createNinjaDto.name };
  }

  @Delete('/:id')
  deleteNinja(@Param('id') id: string) {
    return { id };
  }

  @Put('/:id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return { id, name: updateNinjaDto };
  }
}
