import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import GenreEntity from '../genre/genre.entity';
import MovieEntity from '../movie/movie.entity';

@Injectable()
export class GenreMovieService {
    constructor(
        @InjectRepository(GenreEntity)
        private readonly genreRepository: Repository<GenreEntity>,
        @InjectRepository(MovieEntity)
        private readonly movieRepository: Repository<MovieEntity>,
    ) {}

    async addMovieToGenre(genreId: string, movieId: string): Promise<GenreEntity> {
        const genre: GenreEntity = await this.genreRepository.findOne({ where: { id: genreId }, relations: ['movies'] });
        if (!genre)
            throw new BusinessLogicException("The genre with the given id was not found", BusinessError.NOT_FOUND);
        const movie: MovieEntity = await this.movieRepository.findOne({ where: { id: movieId } });
        if (!movie)
            throw new BusinessLogicException("The movie with the given id was not found", BusinessError.NOT_FOUND);

        genre.movies = [...genre.movies, movie];
        return await this.genreRepository.save(genre);
    }

    async findMoviesFromGenre(genreId: string): Promise<MovieEntity[]> {
        const genre: GenreEntity = await this.genreRepository.findOne({ where: { id: genreId }, relations: ['movies'] });
        if (!genre)
            throw new BusinessLogicException("The genre with the given id was not found", BusinessError.NOT_FOUND);

        return genre.movies;
    }

    async findMovieFromGenre(genreId: string, movieId: string): Promise<MovieEntity> {
        const genre: GenreEntity = await this.genreRepository.findOne({ where: { id: genreId }, relations: ['movies'] });
        if (!genre)
            throw new BusinessLogicException("The genre with the given id was not found", BusinessError.NOT_FOUND);
        const persistedMovie: MovieEntity = await this.movieRepository.findOne({ where: { id: movieId } });
        if (!persistedMovie)
            throw new BusinessLogicException("The movie with the given id was not found", BusinessError.NOT_FOUND);
        const movie: MovieEntity = genre.movies.find(movie => movie.id === movieId);
        if (!movie)
            throw new BusinessLogicException("The movie with the given id is not associated to the genre", BusinessError.PRECONDITION_FAILED);

        return movie;
    }

    /*async updateMovieFromGenre(genreId: string, movieId: string, movie: MovieEntity): Promise<MovieEntity> {
        const genre: GenreEntity = await this.genreRepository.findOne({ where: { id: genreId }, relations: ['movies'] });
        if (!genre)
            throw new BusinessLogicException("The genre with the given id was not found", BusinessError.NOT_FOUND);
        const persistedMovie: MovieEntity = await this.movieRepository.findOne({ where: { id: movieId } });
        if (!persistedMovie)
            throw new BusinessLogicException("The movie with the given id was not found", BusinessError.NOT_FOUND);
        const movieIndex: number = genre.movies.findIndex(movie => movie.id === movieId);
        if (movieIndex === -1)
            throw new BusinessLogicException("The movie with the given id is not associated to the movie", BusinessError.NOT_FOUND);

        genre.movies[movieIndex] = movie;
        return await this.genreRepository.save(genre);
    }*/

    async updateMoviesFromGenre(genreId: string, movies: MovieEntity[]): Promise<GenreEntity> {
        const genre: GenreEntity = await this.genreRepository.findOne({ where: { id: genreId }, relations: ['movies'] });
        if (!genre)
            throw new BusinessLogicException("The genre with the given id was not found", BusinessError.NOT_FOUND);
        
        for (const movie of movies) {
            const persistedMovie: MovieEntity = await this.movieRepository.findOne({ where: { id: movie.id } });
            if (!persistedMovie)
                throw new BusinessLogicException("The movie with the given id was not found", BusinessError.NOT_FOUND);
        }
        
        genre.movies = movies;
        return await this.genreRepository.save(genre);
    }

    async deleteMovieFromGenre(genreId: string, movieId: string): Promise<void> {
        const genre: GenreEntity = await this.genreRepository.findOne({ where: { id: genreId }, relations: ['movies'] });
        if (!genre)
            throw new BusinessLogicException("The genre with the given id was not found", BusinessError.NOT_FOUND);
        const persistedMovie: MovieEntity = await this.movieRepository.findOne({ where: { id: movieId } });
        if (!persistedMovie)
            throw new BusinessLogicException("The movie with the given id was not found", BusinessError.NOT_FOUND);
        const movieIndex: number = genre.movies.findIndex(movie => movie.id === movieId);
        if (movieIndex === -1)
            throw new BusinessLogicException("The movie with the given id is not associated to the genre", BusinessError.PRECONDITION_FAILED);

        genre.movies.splice(movieIndex, 1);
        await this.genreRepository.save(genre);
    }
}
