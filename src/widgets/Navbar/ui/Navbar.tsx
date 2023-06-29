import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ThemeButton.GLOW_ON_HOVER}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio, dolorum eligendi et excepturi explicabo impedit laboriosam odio! Eaque, quos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, itaque!
            </Modal>
        </div>
    );
};
