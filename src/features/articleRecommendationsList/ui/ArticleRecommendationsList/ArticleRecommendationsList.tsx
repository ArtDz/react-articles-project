import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader';
import {
    useArticleRecommendationsList
} from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3)

    if (isLoading) return <Loader />
    if (error || !articles) return <Text theme={TextTheme.ERROR} title={t('Ошибка при загрузке рекомендаций')} />

    return (
        <VStack data-testid="ArticleRecommendationsList" gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                target="_blank"
                articles={articles}
            />
        </VStack>
    );
});
