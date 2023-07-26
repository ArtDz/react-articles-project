import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { ThunkConfig } from '@/app/providers/StoreProvider'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('common/loginByUsername', async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI
    try {
        // @ts-ignore
        const response = await extra.api.post('/login', authData)
        if (!response.data) {
            throw new Error()
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        )
        dispatch(userActions.setAuthData(response.data))
        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue('error')
    }
})
