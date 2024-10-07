import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'nunchucks'], {
    message: 'Weapon should either be star or nunchucks',
  })
  weapon: 'stars' | 'nunchucks';
}
