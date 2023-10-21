import { Resturants } from '@prisma/client';

export default class ResturantsEntity implements Resturants {
  readonly id!: string;
  readonly name: string;
  readonly image: string;
  readonly address: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}
