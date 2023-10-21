import { Injectable } from '@nestjs/common';
import { Prisma, ResturantReviews } from '@prisma/client';
import { ResturantReviewsRepository } from './resturant.reviews.repository';
import { PaginatorTypes } from '@nodeteam/nestjs-prisma-pagination';

@Injectable()
export class ResturantReviewsService {
  constructor(
    private readonly resturantReviewsRepository: ResturantReviewsRepository,
  ) {}

  async findByResturantId(
    where: Prisma.ResturantReviewsWhereInput,
    orderBy: Prisma.ResturantReviewsOrderByWithRelationInput,
  ): Promise<PaginatorTypes.PaginatedResult<ResturantReviews>> {
    return this.resturantReviewsRepository.findAll(where, orderBy);
  }

  create(
    data: Prisma.ResturantReviewsCreateManyResturantInput,
    resturantId: string,
  ): Promise<ResturantReviews> {
    return this.resturantReviewsRepository.create({
      comment: data.comment,
      resturant: {
        connect: {
          id: resturantId,
        },
      },
      user: {
        connect: {
          id: data.userId,
        },
      },
    });
  }
}
