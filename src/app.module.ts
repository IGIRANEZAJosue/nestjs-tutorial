import { Module } from '@nestjs/common';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [NinjasModule],
})
export class AppModule {}
