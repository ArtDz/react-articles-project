import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { t } = useTranslation()
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000
    })

    if (isLoading) {
        return (
            <VStack max gap="16" className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" borderRadius="8" height={80} />
                <Skeleton width="100%" borderRadius="8" height={80} />
                <Skeleton width="100%" borderRadius="8" height={80} />
            </VStack>
        )
    }

    return (
        <VStack max gap="16" className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map(item => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    )
})
