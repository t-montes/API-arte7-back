import { Module } from '@nestjs/common';
import { MovieDirectorService } from './movie-director.service';

@Module({
  providers: [MovieDirectorService]
})
export class MovieDirectorModule {}
