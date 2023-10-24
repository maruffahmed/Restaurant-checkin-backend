import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiExtraModels, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import ApiBaseResponses from '@decorators/api-base-response.decorator';
import Serialize from '@decorators/serialize.decorator';
import { OrderByPipe, WherePipe } from '@nodeteam/nestjs-pipes';
import { Prisma, Resturants, ResturantReviews } from '@prisma/client';
import { PaginatorTypes } from '@nodeteam/nestjs-prisma-pagination';
import ApiOkBaseResponse from '@decorators/api-ok-base-response.decorator';
import { ResturantService } from './resturants.service';
import ResturantsBaseEntity from './entities/resturants-base.entity';
import { ResturantsCreateDto } from './dto/resturants-create.dto';
import { SkipAuth } from '@modules/auth/skip-auth.guard';
import { ResturantReviewsService } from './resturant.reviews.service';
import { ResturantReviewsCreateDto } from './dto/resturant-reviews-create.dto';
import ResturantReviewsBaseEntity from './entities/resturant-reviews-base.entity';

@ApiTags('Resturants')
@ApiExtraModels(ResturantsBaseEntity)
@ApiBaseResponses()
@Controller('resturants')
export class ResturantsController {
  constructor(
    private readonly resturantService: ResturantService,
    private readonly resturantReviewService: ResturantReviewsService,
  ) {}

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
  ): Promise<Resturants> {
    return this.resturantService.create(resturantsCreateDto);
  }

  @Get(':id/reviews')
  @ApiParam({ name: 'id', required: true, type: 'string' })
  @ApiQuery({ name: 'orderBy', required: false, type: 'string' })
  @ApiOkBaseResponse({ dto: ResturantReviewsBaseEntity, isArray: true })
  @Serialize(ResturantReviewsBaseEntity)
  @SkipAuth()
  async findAllReviews(
    @Param('id') id: string,
    @Query('orderBy', OrderByPipe)
    orderBy?: Prisma.UserOrderByWithRelationInput,
  ): Promise<PaginatorTypes.PaginatedResult<ResturantReviews>> {
    return this.resturantReviewService.findByResturantId(
      {
        resturantId: id,
      },
      orderBy,
    );
  }

  @Post(':id/reviews')
  @ApiOkBaseResponse({ dto: ResturantReviewsBaseEntity, isArray: true })
  @Serialize(ResturantReviewsBaseEntity)
  @SkipAuth()
  async createReview(
    @Body() resturantReviewsCreateDto: ResturantReviewsCreateDto,
    @Param('id') resturantId: string,
  ): Promise<ResturantReviews> {
    return this.resturantReviewService.create(
      resturantReviewsCreateDto,
      resturantId,
    );
  }
}
