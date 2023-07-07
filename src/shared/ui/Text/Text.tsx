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

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text = memo(({
    className, title, text, align = TextAlign.LEFT, theme = TextTheme.PRIMARY
}: TextProps) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
))
