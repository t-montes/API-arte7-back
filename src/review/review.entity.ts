import { Column, Entity, ManyToOne } from 'typeorm';
import BaseEntity from '../base/base.entity';
import MovieEntity from '../movie/movie.entity';

@Entity()
export default class ReviewEntity extends BaseEntity {
    @Column()
    text: string;

    @Column()
    score: number;

    @Column()
    creator: string;

    @ManyToOne(type => MovieEntity, movie => movie.reviews)
    movie: MovieEntity;
}
