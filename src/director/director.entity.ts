import { Entity, OneToMany } from 'typeorm';
import PersonEntity from '../person/person.entity';
import MovieEntity from '../movie/movie.entity';

@Entity()
export default class DirectorEntity extends PersonEntity {
    @OneToMany(type => MovieEntity, movie => movie.director)
    movies: MovieEntity[];    
}
