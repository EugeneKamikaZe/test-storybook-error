import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '~/shared/types/user';

import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    _inited: true,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

//  Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
