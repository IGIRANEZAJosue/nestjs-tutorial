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
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    const service = new NinjasService();
    return service.getNinjas(weapon);
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
