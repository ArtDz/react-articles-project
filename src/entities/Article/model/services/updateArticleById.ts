import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article, getArticleDetailsData } from '../..'

export const updateArticleById = createAsyncThunk<
    Article,
    void,
    ThunkConfig<string>
>('article-details/updateArticleById', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const article = getArticleDetailsData(getState())

    try {
        const response = await extra.api.put<Article>(
            `/articles/${article?.id}`,
            article
        )
        return response.data
    } catch (error) {
        return rejectWithValue('')
    }
})
