import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './CommentCard.module.scss'
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div
                data-testid="CommentCard.Loading"
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton height={30} width={30} borderRadius="50%" />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton className={cls.text} height={50} width="100%" />
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <div
            data-testid="CommentCard.Content"
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} className={cls.text} />
        </div>
    )
})
