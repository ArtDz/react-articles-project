import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss'
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ))

export const ArticleList = memo(({
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.SMALL
}: ArticleListProps) => {
    const { t } = useTranslation()

    const renderArticle = (article: Article) => (
        <ArticleListItem
            target={target}
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
        />
    )

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    )
})
