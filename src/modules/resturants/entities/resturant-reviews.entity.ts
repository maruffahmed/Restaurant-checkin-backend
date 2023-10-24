import { ResturantReviews } from '@prisma/client';

export default class ResturantReviewsEntity implements ResturantReviews {
  readonly id!: string;
  readonly comment: string;
  readonly resturantId: string;
  readonly userId: string;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}
