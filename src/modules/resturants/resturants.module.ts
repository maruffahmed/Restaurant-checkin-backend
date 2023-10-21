import { Module } from '@nestjs/common';
import { ResturantService } from './resturants.service';
import { ResturantRepository } from './resturants.repository';
import { ResturantsController } from './resturants.controller';
import { CaslModule } from '@modules/casl';
import { permissions } from './resturants.permissions';

@Module({
  imports: [CaslModule.forFeature({ permissions })],
  controllers: [ResturantsController],
  providers: [ResturantService, ResturantRepository],
})
export class ResturantsModule {}
