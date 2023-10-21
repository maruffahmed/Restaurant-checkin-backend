import { PrismaService } from '@providers/prisma';
import { Injectable } from '@nestjs/common';
import { paginator } from '@nodeteam/nestjs-prisma-pagination';
import { PaginatorTypes } from '@nodeteam/nestjs-prisma-pagination';
import { Prisma, Resturants } from '@prisma/client';

@Injectable()
export class ResturantRepository {
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

  findById(id: string): Promise<Resturants> {
    return this.prisma.resturants.findUnique({
      where: { id },
    });
  }

  async findOne(
    params: Prisma.ResturantsFindFirstArgs,
  ): Promise<Resturants | null> {
    return this.prisma.resturants.findFirst(params);
  }

  async create(data: Prisma.ResturantsCreateInput): Promise<Resturants> {
    return this.prisma.resturants.create({
      data,
    });
  }

  async findAll(
    where: Prisma.ResturantsWhereInput,
    orderBy: Prisma.ResturantsOrderByWithRelationInput,
  ): Promise<PaginatorTypes.PaginatedResult<Resturants>> {
    return this.paginate(this.prisma.resturants, {
      where,
      orderBy,
    });
  }
}
