import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item?: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.SidebarItem, {}, [])}>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                to={item.path}
                className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>
    )
})
