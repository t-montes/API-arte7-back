import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DirectorService from './director.service';
import DirectorEntity from './director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DirectorEntity])],
  providers: [DirectorService]
})
export class DirectorModule { }
