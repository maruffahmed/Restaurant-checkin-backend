import { Module } from '@nestjs/common';
import { ResturantService } from './resturants.service';
import { ResturantRepository } from './resturants.repository';
import { ResturantsController } from './resturants.controller';
import { CaslModule } from '@modules/casl';
import { permissions } from './resturants.permissions';
import { ResturantReviewsService } from './resturant.reviews.service';
import { ResturantReviewsRepository } from './resturant.reviews.repository';

@Module({
  imports: [CaslModule.forFeature({ permissions })],
  controllers: [ResturantsController],
  providers: [
    ResturantService,
    ResturantReviewsService,
    ResturantRepository,
    ResturantReviewsRepository,
  ],
})
export class ResturantsModule {}
