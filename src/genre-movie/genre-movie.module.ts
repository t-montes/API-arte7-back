import { Module } from '@nestjs/common';
import { GenreMovieService } from './genre-movie.service';

@Module({
  providers: [GenreMovieService]
})
export class GenreMovieModule {}
