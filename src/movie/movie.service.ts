import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import MovieEntity from './movie.entity';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(MovieEntity)
        private readonly movieRepository: Repository<MovieEntity>,
    ){}

    async findAll(): Promise<MovieEntity[]> {
        return await this.movieRepository.find({ relations: ['genres', 'directors', 'youtubeTrailers'] });
    }

    async findOne(id: string): Promise<MovieEntity> {
        const movie:MovieEntity = await this.movieRepository.findOne({ where: {id}, relations: ['genres', 'directors', 'youtubeTrailers'] });
        if (!movie) 
            throw new BusinessLogicException("The movie with the given id was not found", BusinessError.NOT_FOUND);
        return movie;
    }

    async create(movie: MovieEntity): Promise<MovieEntity> {
        return await this.movieRepository.save(movie);
    }

    async update(id: string, movie: MovieEntity): Promise<MovieEntity> {
        const movieToUpdate:MovieEntity = await this.movieRepository.findOne({ where: {id} });
        if (!movieToUpdate) 
            throw new BusinessLogicException("The movie with the given id was not found", BusinessError.NOT_FOUND);
        return await this.movieRepository.save(movie);
    }
    
    async delete(id: string): Promise<void> {
        const movieToDelete:MovieEntity = await this.movieRepository.findOne({ where: {id} });
        if (!movieToDelete) 
            throw new BusinessLogicException("The movie with the given id was not found", BusinessError.NOT_FOUND);
        await this.movieRepository.remove(movieToDelete);
    }
}
