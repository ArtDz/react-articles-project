import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Input } from '@/shared/ui/Input'
import { SortOrder } from '@/shared/types/sort'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors'
import { articlePageActions } from '../../model/slice/articlePageSlice'
import cls from './ArticlesPageFilters.module.scss'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo(
    ({ className }: ArticlesPageFiltersProps) => {
        const { t } = useTranslation()
        const dispatch = useAppDispatch()
        const view = useSelector(getArticlesPageView)
        const sort = useSelector(getArticlesPageSort)
        const order = useSelector(getArticlesPageOrder)
        const search = useSelector(getArticlesPageSearch)
        const type = useSelector(getArticlesPageType)

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }))
        }, [dispatch])

        const debouncedFetchData = useDebounce(fetchData, 500)

        const onChangeView = useCallback(
            (viewType: ArticleView) => {
                dispatch(articlePageActions.setView(viewType))
            },
            [dispatch]
        )

        const onChangeSort = useCallback(
            (newSort: ArticleSortField) => {
                dispatch(articlePageActions.setSort(newSort))
                dispatch(articlePageActions.setPage(1))
                fetchData()
            },
            [dispatch, fetchData]
        )

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(articlePageActions.setOrder(newOrder))
                dispatch(articlePageActions.setPage(1))
                fetchData()
            },
            [dispatch, fetchData]
        )

        const onChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlePageActions.setSearch(search))
                dispatch(articlePageActions.setPage(1))
                debouncedFetchData()
            },
            [dispatch, debouncedFetchData]
        )

        const onChangeType = useCallback(
            (value: ArticleType) => {
                dispatch(articlePageActions.setType(value))
                dispatch(articlePageActions.setPage(1))
                fetchData()
            },
            [dispatch, fetchData]
        )

        return (
            <div className={classNames(cls.articleFilters, {}, [className])}>
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <div>
                    <Input
                        onChange={onChangeSearch}
                        value={search}
                        labelName={t('Поиск')}
                        placeholder={t('Поиск')}
                        id="filter-input"
                    />
                </div>
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
            </div>
        )
    }
)
