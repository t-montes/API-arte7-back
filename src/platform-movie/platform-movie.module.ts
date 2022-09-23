import { Module } from '@nestjs/common';
import { PlatformMovieService } from './platform-movie.service';

@Module({
  providers: [PlatformMovieService]
})
export class PlatformMovieModule {}
