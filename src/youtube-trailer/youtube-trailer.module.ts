import { Module } from '@nestjs/common';
import { YoutubeTrailerService } from './youtube-trailer.service';

@Module({
  providers: [YoutubeTrailerService]
})
export class YoutubeTrailerModule {}
