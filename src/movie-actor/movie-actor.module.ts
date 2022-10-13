import { Module } from '@nestjs/common';
import { MovieActorService } from './movie-actor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from '../movie/movie.entity';
import { ActorEntity } from '../actor/actor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, ActorEntity])],
  providers: [MovieActorService]
})
export class MovieActorModule {}
