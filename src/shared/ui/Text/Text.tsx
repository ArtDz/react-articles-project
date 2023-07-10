import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss'

export const enum TextTheme {
    PRIMARY='primary',
    ERROR='error'
}

export const enum TextAlign {
    RIGHT= 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export const enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

export const Text = memo(({
    className, title, size = TextSize.M, text, align = TextAlign.LEFT, theme = TextTheme.PRIMARY
}: TextProps) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[size], cls[align]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
))
