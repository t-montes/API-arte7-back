import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PlatformService from './platform.service';
import PlatformEntity from './platform.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlatformEntity])],
  providers: [PlatformService]
})
export class PlatformModule { }
