import { UpdateNinjaDto } from './update-ninja.dto';
import { CreateNinjaDto } from './create-ninja.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'NinjaA', weapon: 'stars' },
    { id: 1, name: 'NinjaB', weapon: 'nunchucks' },
  ];

  getNinjas(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) throw new Error('NInja not found');

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      id: Date.now(),
      name: createNinjaDto.name,
      weapon: createNinjaDto.weapon,
    };
    this.ninjas.push(newNinja);

    return newNinja;
  }

  deleteNinja(id: number) {
    const deletedNinja = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

    return deletedNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) =>
      ninja.id === id ? { ...ninja, ...updateNinjaDto } : ninja,
    );
  }
}
