import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export default class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}

