import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss'
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation()
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        )
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    )
})
