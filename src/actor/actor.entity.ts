import { Entity, ManyToMany } from 'typeorm';
import MovieEntity from '../movie/movie.entity';
import PersonEntity from '../person/person.entity';

@Entity()
export default class ActorEntity extends PersonEntity {
    @ManyToMany(type => MovieEntity, movie => movie.actors)
    movies: MovieEntity[];
}
