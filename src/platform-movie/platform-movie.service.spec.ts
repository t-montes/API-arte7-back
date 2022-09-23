import { Test, TestingModule } from '@nestjs/testing';
import { PlatformMovieService } from './platform-movie.service';

describe('PlatformMovieService', () => {
  let service: PlatformMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatformMovieService],
    }).compile();

    service = module.get<PlatformMovieService>(PlatformMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
