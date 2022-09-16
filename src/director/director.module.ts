import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';

@Module({
  providers: [DirectorService]
})
export class DirectorModule {}
