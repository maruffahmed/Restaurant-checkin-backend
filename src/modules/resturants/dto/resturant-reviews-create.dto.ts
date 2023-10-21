import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResturantReviewsCreateDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly comment: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
