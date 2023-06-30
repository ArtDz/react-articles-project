import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder="Name"
                name="username"
                labelName="login"
                id="username"
                value={value}
                onChange={onChange}
            />
            <Input
                placeholder="password"
                name="password"
                labelName="password"
                id="password"
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    )
}
