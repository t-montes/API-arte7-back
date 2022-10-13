/**
 * import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { ActorDto } from './actor.dto';
import { ActorEntity } from './actor.entity';
import { ActorService } from './actor.service';

@Controller('actors')
@UseInterceptors(BusinessErrorsInterceptor)
export class ActorController {
    constructor(private readonly actorService: ActorService) {}

    @Get()
    async findAll(): Promise<ActorEntity[]> {
        return await this.actorService.findAll();
    }

    @Get(':actorId')
    async findOne(@Param('actorId') actorId: string): Promise<ActorEntity> {
        return await this.actorService.findOne(actorId);
    }

    @Post()
    async create(@Body() actorDto: ActorDto): Promise<ActorEntity> {
        return await this.actorService.create(plainToInstance(ActorEntity, actorDto));
    }

    @Put(':actorId')
    async update(@Param('actorId') actorId: string, @Body() actorDto: ActorDto): Promise<ActorEntity> {
        return await this.actorService.update(actorId, plainToInstance(ActorEntity, actorDto));
    }

    @Delete(':actorId')
    @HttpCode(204)
    async delete(@Param('actorId') actorId: string): Promise<void> {
        await this.actorService.delete(actorId);
    }
    
}

 */

import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { GenreDto } from './genre.dto';
import { GenreEntity } from './genre.entity';
import { GenreService } from './genre.service';

@Controller('genres')
@UseInterceptors(BusinessErrorsInterceptor)
export class GenreController {
    constructor(private readonly genreService: GenreService) {}

    @Get()
    async findAll(): Promise<GenreEntity[]> {
        return await this.genreService.findAll();
    }

    @Get(':genreId')
    async findOne(@Param('genreId') genreId: string): Promise<GenreEntity> {
        return await this.genreService.findOne(genreId);
    }

    @Post()
    async create(@Body() genreDto: GenreDto): Promise<GenreEntity> {
        return await this.genreService.create(plainToInstance(GenreEntity, genreDto));
    }

    @Put(':genreId')
    async update(@Param('genreId') genreId: string, @Body() genreDto: GenreDto): Promise<GenreEntity> {
        return await this.genreService.update(genreId, plainToInstance(GenreEntity, genreDto));
    }

    @Delete(':genreId')
    @HttpCode(204)
    async delete(@Param('genreId') genreId: string): Promise<void> {
        await this.genreService.delete(genreId);
    }
    
}