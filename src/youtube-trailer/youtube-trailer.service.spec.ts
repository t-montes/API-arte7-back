import { Test, TestingModule } from '@nestjs/testing';
import YoutubeTrailerService from './youtube-trailer.service';

describe('YoutubeTrailerService', () => {
  let service: YoutubeTrailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YoutubeTrailerService],
    }).compile();

    service = module.get<YoutubeTrailerService>(YoutubeTrailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
