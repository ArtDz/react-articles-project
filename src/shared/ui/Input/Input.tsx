import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    type?: string
    placeholder?: string
    name?: string
    id?: string
    labelName?: string
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
        ...otherProps
    } = props
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }
    return (
        <div className={[cls.form__group, cls.field].join(' ')}>
            <input
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                className={classNames(cls.form__field, {}, [className])}
            />
            <label htmlFor={id} className={cls.form__label}>{labelName}</label>
        </div>

    )
})
