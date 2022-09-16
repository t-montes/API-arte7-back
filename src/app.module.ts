import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { DirectorModule } from './director/director.module';
import { ActorModule } from './actor/actor.module';
import { GenreModule } from './genre/genre.module';
import { PlatformModule } from './platform/platform.module';
import { ReviewModule } from './review/review.module';
import { YoutubeTrailerModule } from './youtube-trailer/youtube-trailer.module';

@Module({
  imports: [MovieModule, DirectorModule, ActorModule, GenreModule, PlatformModule, ReviewModule, YoutubeTrailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
