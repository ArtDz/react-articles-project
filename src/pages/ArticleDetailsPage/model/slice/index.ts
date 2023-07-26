import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { ArticlesDetailsPageSchema } from '../types/index'
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'

export const articleDetailsPageReducer =
    combineReducers<ArticlesDetailsPageSchema>({
        recommendations: articleDetailsPageRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    })
