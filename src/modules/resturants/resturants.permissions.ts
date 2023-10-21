import { InferSubjects } from '@casl/ability';

import { Actions, Permissions } from '@modules/casl';
import { Roles } from '@modules/app/app.roles';
import ResturantsEntity from './entities/resturants.entity';

export type Subjects = InferSubjects<typeof ResturantsEntity>;

export const permissions: Permissions<Roles, Subjects, Actions> = {
  everyone({ can }) {
    can(Actions.read, ResturantsEntity);
  },

  customer({ user, can }) {
    can(Actions.update, ResturantsEntity, { id: user.id });
  },
};
