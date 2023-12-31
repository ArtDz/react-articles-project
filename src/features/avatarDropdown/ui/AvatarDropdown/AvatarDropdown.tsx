import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Админка'),
                              href: getRouteAdmin(),
                          },
                      ]
                    : []),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Avatar fallbackInverted size={40} src={authData.avatar} />
            }
        />
    )
})
