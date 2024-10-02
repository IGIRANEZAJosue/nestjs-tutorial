import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private readonly ninjas = [
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
}
