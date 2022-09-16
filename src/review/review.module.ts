import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewService } from './review.service';
import ReviewEntity from './review.entity';
import MovieEntity from '../movie/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity, MovieEntity])],
  providers: [ReviewService]
})
export class ReviewModule {}
