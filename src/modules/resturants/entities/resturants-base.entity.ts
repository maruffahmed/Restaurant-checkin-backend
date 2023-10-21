import { Exclude, Expose } from 'class-transformer';

import { ApiProperty, PartialType } from '@nestjs/swagger';
import ResturantEntity from '@modules/resturants/entities/resturants.entity';

@Exclude()
export default class ResturantsBaseEntity extends PartialType(ResturantEntity) {
  @ApiProperty({ type: String })
  @Expose()
  declare readonly id: string;

  @ApiProperty({ type: String, nullable: false })
  @Expose()
  declare readonly name: string | null;

  @ApiProperty({ type: String, nullable: false })
  @Expose()
  declare readonly image: string | null;

  @ApiProperty({ type: String, nullable: false })
  @Expose()
  declare readonly address: string | null;

  @ApiProperty({ type: Number, nullable: false })
  @Expose()
  declare readonly latitude: number | null;

  @ApiProperty({ type: Number, nullable: false })
  @Expose()
  declare readonly longitude: number | null;
}
