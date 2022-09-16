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
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MovieModule, DirectorModule, ActorModule, GenreModule, PlatformModule, ReviewModule, YoutubeTrailerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'arte7',
      entities: [__dirname + '/**/*.entity.ts'],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
