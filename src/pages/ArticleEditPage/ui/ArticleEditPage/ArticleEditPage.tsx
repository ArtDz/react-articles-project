import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation()
    const { id } = useParams<{id:string}>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? <Text title={t('Редактирование статьи с ID = ') + id} />
                : <Text title={t('Создание новой статьи ')} />}
        </Page>
    )
})

export default ArticleEditPage
