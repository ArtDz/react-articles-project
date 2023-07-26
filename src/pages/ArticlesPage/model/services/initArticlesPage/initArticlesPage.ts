import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortField, ArticleType } from '@/entities/Article'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi

    const inited = getArticlesPageInited(getState())

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder
        const sortFromUrl = searchParams.get('sort') as ArticleSortField
        const searchFromUrl = searchParams.get('search')
        const typeFromUrl = searchParams.get('type') as ArticleType

        if (orderFromUrl) {
            dispatch(articlePageActions.setOrder(orderFromUrl))
        }
        if (sortFromUrl) {
            dispatch(articlePageActions.setSort(sortFromUrl))
        }
        if (searchFromUrl) {
            dispatch(articlePageActions.setSearch(searchFromUrl))
        }

        if (typeFromUrl) {
            dispatch(articlePageActions.setType(typeFromUrl))
        }

        dispatch(articlePageActions.initState())
        dispatch(fetchArticlesList({}))
    }
})
