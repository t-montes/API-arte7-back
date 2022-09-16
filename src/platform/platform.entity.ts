import { Column, Entity, ManyToMany, JoinTable } from 'typeorm';
import BaseEntity from '../base/base.entity';
import MovieEntity from '../movie/movie.entity';

@Entity()
export default class PlatformEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    url: string;

    @ManyToMany(type => MovieEntity, movie => movie.platforms)
    @JoinTable()
    movies: MovieEntity[];
}
