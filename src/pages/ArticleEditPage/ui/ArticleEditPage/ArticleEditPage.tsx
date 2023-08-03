import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Page } from '@/widgets/Page'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import cls from './ArticleEditPage.module.scss'
import {
    getArticleDetailsData,
    fetchArticleById,
    articleDetailsActions,
    updateArticleById,
} from '@/entities/Article'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { InputforEdit } from '@/shared/ui/InputforEdit/InputforEdit'
import { Button } from '@/shared/ui/Button'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)
    const dispatch = useAppDispatch()

    const article = useSelector(getArticleDetailsData)

    useInitialEffect(() => {
        dispatch(fetchArticleById(id))
    })

    const onChangeTitle = useCallback(
        (value: string) => {
            dispatch(articleDetailsActions.setTitle(value))
        },
        [dispatch]
    )

    const onClickSave = useCallback(() => {
        dispatch(updateArticleById())
        alert(t('Изменениния сохранены!'))
    }, [dispatch, t])

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? (
                <>
                    <Text title={t('Редактирование статьи с ID = ') + id} />
                    <Text
                        style={{ marginTop: 16 }}
                        text={t('Название статьи')}
                    />
                    <InputforEdit
                        value={article?.title}
                        onChange={onChangeTitle}
                    />
                    <Button style={{ marginTop: 16 }} onClick={onClickSave}>
                        {t('Сохранить')}
                    </Button>
                </>
            ) : (
                <Text title={t('Создание новой статьи ')} />
            )}
        </Page>
    )
})

export default ArticleEditPage
