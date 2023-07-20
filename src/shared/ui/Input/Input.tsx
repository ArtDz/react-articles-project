import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    type?: string
    placeholder?: string
    name?: string
    id?: string
    labelName?: string
    readonly?: boolean
    'data-testid'?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        placeholder,
        value,
        onChange,
        name,
        labelName,
        id,
        type = 'text',
        readonly,
        'data-testid': dataTestId,
        ...otherProps
    } = props
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    return (
        <div className={classNames('', { [cls.readonly]: readonly }, [cls.form__group, cls.field])}>
            <input
                data-testid={dataTestId}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                readOnly={readonly}
                className={classNames(cls.form__field, {}, [className])}
            />
            <label htmlFor={id} className={cls.form__label}>{labelName}</label>
        </div>

    )
})
