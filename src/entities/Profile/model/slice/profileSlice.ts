import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

export const userSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export const { actions: profileActions } = userSlice
export const { reducer: profileReducer } = userSlice
