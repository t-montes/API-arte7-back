import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import MovieService from './movie.service';
import MovieEntity from './movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  providers: [MovieService]
})
export class MovieModule { }
