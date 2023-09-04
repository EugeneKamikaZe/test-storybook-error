import { UserSchema } from '../types/userSchema';

interface UserSelectorsProps {
    user: UserSchema;
}

export const getUserAuthData = (state: UserSelectorsProps) =>
    state.user.authData;
export const getUserInited = (state: UserSelectorsProps) => state.user._inited;
