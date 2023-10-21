import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiQuery, ApiTags } from '@nestjs/swagger';
import ApiBaseResponses from '@decorators/api-base-response.decorator';
import Serialize from '@decorators/serialize.decorator';
import { OrderByPipe, WherePipe } from '@nodeteam/nestjs-pipes';
import { Prisma, Resturants } from '@prisma/client';
import { PaginatorTypes } from '@nodeteam/nestjs-prisma-pagination';
import ApiOkBaseResponse from '@decorators/api-ok-base-response.decorator';
import { ResturantService } from './resturants.service';
import ResturantsBaseEntity from './entities/resturants-base.entity';
import { ResturantsCreateDto } from './dto/resturants-create.dto';
import { SkipAuth } from '@modules/auth/skip-auth.guard';

@ApiTags('Resturants')
@ApiExtraModels(ResturantsBaseEntity)
@ApiBaseResponses()
@Controller('resturants')
export class ResturantsController {
  constructor(private readonly resturantService: ResturantService) {}

  @Get()
  @ApiQuery({ name: 'where', required: false, type: 'string' })
  @ApiQuery({ name: 'orderBy', required: false, type: 'string' })
  @ApiOkBaseResponse({ dto: ResturantsBaseEntity, isArray: true })
  @Serialize(ResturantsBaseEntity)
  @SkipAuth()
  async findAll(
    @Query('where', WherePipe) where?: Prisma.UserWhereInput,
    @Query('orderBy', OrderByPipe)
    orderBy?: Prisma.UserOrderByWithRelationInput,
  ): Promise<PaginatorTypes.PaginatedResult<Resturants>> {
    return this.resturantService.findAll(where, orderBy);
  }

  @Post()
  @ApiOkBaseResponse({ dto: ResturantsBaseEntity, isArray: true })
  @Serialize(ResturantsBaseEntity)
  @SkipAuth()
  async create(
    @Body() resturantsCreateDto: ResturantsCreateDto,
  ): Promise<PaginatorTypes.PaginatedResult<Resturants>> {
    return this.resturantService.create(resturantsCreateDto);
  }
}
