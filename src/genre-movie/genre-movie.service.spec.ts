import { Test, TestingModule } from '@nestjs/testing';
import { GenreMovieService } from './genre-movie.service';

describe('GenreMovieService', () => {
  let service: GenreMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenreMovieService],
    }).compile();

    service = module.get<GenreMovieService>(GenreMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
