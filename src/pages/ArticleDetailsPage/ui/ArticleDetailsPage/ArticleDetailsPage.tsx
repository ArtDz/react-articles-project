import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { articleDetailsPageReducer } from '../../model/slice'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleRating } from '@/features/articleRating'
import { getFeatureFlags } from '@/shared/lib/features'
import { Counter } from '@/entities/Counter'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>()
    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled')
    const isCounterEnabled = getFeatureFlags('isCounterEnabled')

    if (!id) {
        return null
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                {isCounterEnabled && <Counter />}
                {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
