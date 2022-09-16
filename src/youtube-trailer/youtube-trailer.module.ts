import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YoutubeTrailerService } from './youtube-trailer.service';
import YoutubeTrailerEntity from './youtube-trailer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([YoutubeTrailerEntity])],
  providers: [YoutubeTrailerService]
})
export class YoutubeTrailerModule {}
