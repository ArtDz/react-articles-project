import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()

    const dispatch = useDispatch()
    const {
        username, password, error, isLoading
    } = useSelector(getLoginState)

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setUserPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                placeholder="Name"
                name="username"
                labelName="login"
                id="username"
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                placeholder="password"
                name="password"
                labelName="password"
                id="password"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ThemeButton.GLOW_ON_HOVER}
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})
