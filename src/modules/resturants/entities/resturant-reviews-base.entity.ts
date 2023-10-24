import { Exclude, Expose } from 'class-transformer';

import { ApiProperty, PartialType } from '@nestjs/swagger';
import ResturantReviewsEntity from './resturant-reviews.entity';

@Exclude()
export default class ResturantReviewsBaseEntity extends PartialType(
  ResturantReviewsEntity,
) {
  @ApiProperty({ type: String })
  @Expose()
  declare readonly id: string;

  @ApiProperty({ type: String, nullable: false })
  @Expose()
  declare readonly comment: string | null;

  @ApiProperty({ type: String, nullable: false })
  @Expose()
  declare readonly userId: string | null;

  @ApiProperty({ type: String, nullable: false })
  @Expose()
  declare readonly resturantId: string | null;
}
