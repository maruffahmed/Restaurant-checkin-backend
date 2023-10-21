import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResturantsCreateDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly image: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsNotEmpty()
  readonly latitude: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsNotEmpty()
  readonly longitude: number;
}
