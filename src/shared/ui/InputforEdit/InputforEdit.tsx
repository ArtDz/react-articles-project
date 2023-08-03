import { useTranslation } from 'react-i18next'
import React from 'react'
import cls from './InputforEdit.module.scss'

interface InputforEditProps {
    value?: string
    onChange?: (value: string) => void
}

export const InputforEdit = ({ value, onChange }: InputforEditProps) => {
    const { t } = useTranslation()
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <input
            className={cls.input}
            value={value}
            onChange={onChangeHandler}
            type="text"
        />
    )
}
