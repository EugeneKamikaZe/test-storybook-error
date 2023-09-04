import { User } from '~/shared/types/user';

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
