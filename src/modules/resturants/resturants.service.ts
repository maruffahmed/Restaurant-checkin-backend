import { Injectable } from '@nestjs/common';
import { Prisma, Resturants } from '@prisma/client';
import { PaginatorTypes } from '@nodeteam/nestjs-prisma-pagination';
import { ResturantRepository } from './resturants.repository';

@Injectable()
export class ResturantService {
  constructor(private readonly resturantRepository: ResturantRepository) {}

  async findById(id: string): Promise<Resturants> {
    return this.resturantRepository.findById(id);
  }

  /**
   * @desc Find a Resturants by id
   * @param id
   * @returns Promise<Resturants>
   */
  findOne(id: string): Promise<Resturants> {
    return this.resturantRepository.findOne({
      where: { id },
    });
  }

  /**
   * @desc Find all Resturants with pagination
   * @param where
   * @param orderBy
   */
  findAll(
    where: Prisma.ResturantsWhereInput,
    orderBy: Prisma.ResturantsOrderByWithRelationInput,
  ): Promise<PaginatorTypes.PaginatedResult<Resturants>> {
    return this.resturantRepository.findAll(where, orderBy);
  }

  create(data: Prisma.ResturantsCreateInput): Promise<Resturants> {
    return this.resturantRepository.create(data);
  }
}
