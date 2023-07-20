import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import cls from './NotificationItem.module.scss'
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
    const content = (
        <div className={classNames(cls.NotificationItem, {}, [className])}>
            <Text className={cls.link} title={item.title} text={item.description} />
        </div>
    )

    if (item.href) {
        return (
            <div className={classNames(cls.NotificationItem, {}, [className])}>
                <a className={cls.link} href={item.href} target="_blank" rel="noreferrer">
                    {content}
                </a>
            </div>
        )
    }

    return content
})
