import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} title={t('BTR React App')} />
                <AppLink to={RoutePath.article_create}>
                    <Button>{t('Создать статью')}</Button>
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
                    direction="bottom left"
                    items={[
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout
                        }
                    ]}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ThemeButton.GLOW_ON_HOVER}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />}
        </header>
    );
});
