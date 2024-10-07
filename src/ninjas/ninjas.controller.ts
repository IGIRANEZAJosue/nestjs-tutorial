import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './create-ninja.dto';
import { UpdateNinjaDto } from './update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    // const service = new NinjasService();
    return this.ninjaService.getNinjas(weapon);
  }

  @Get('/:id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    return this.ninjaService.getNinja(id); // or you can use Number(id)
  }

  @Post()
  addNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }

  @Delete('/:id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjaService.deleteNinja(+id);
  }

  @Put('/:id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinja(+id, updateNinjaDto);
  }
}
