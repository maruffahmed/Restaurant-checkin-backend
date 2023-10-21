import { PrismaService } from '@providers/prisma';
import { Injectable } from '@nestjs/common';
import { paginator } from '@nodeteam/nestjs-prisma-pagination';
import { PaginatorTypes } from '@nodeteam/nestjs-prisma-pagination';
import { Prisma, ResturantReviews } from '@prisma/client';

@Injectable()
export class ResturantReviewsRepository {
  private readonly paginate: PaginatorTypes.PaginateFunction;

  constructor(private prisma: PrismaService) {
    /**
     * @desc Create a paginate function
     * @param model
     * @param options
     * @returns Promise<PaginatorTypes.PaginatedResult<T>>
     */
    this.paginate = paginator({
      page: 1,
      perPage: 10,
    });
  }

  findById(id: string): Promise<ResturantReviews> {
    return this.prisma.resturantReviews.findUnique({
      where: { id },
    });
  }

  async findOne(
    params: Prisma.ResturantReviewsFindFirstArgs,
  ): Promise<ResturantReviews | null> {
    return this.prisma.resturantReviews.findFirst(params);
  }

  async create(
    data: Prisma.ResturantReviewsCreateInput,
  ): Promise<ResturantReviews> {
    return this.prisma.resturantReviews.create({
      data,
    });
  }

  async findAll(
    where: Prisma.ResturantsWhereInput,
    orderBy: Prisma.ResturantsOrderByWithRelationInput,
  ): Promise<PaginatorTypes.PaginatedResult<ResturantReviews>> {
    return this.paginate(this.prisma.resturantReviews, {
      where,
      orderBy,
    });
  }
}
