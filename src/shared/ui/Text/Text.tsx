import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export const enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export const enum TextSize {
    S = 'size_s',
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
    'data-testid'?: string
    style?: any
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
}

export const Text = memo(
    ({
        className,
        'data-testid': dataTestId = '',
        title,
        size = TextSize.M,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        style,
    }: TextProps) => {
        const HeaderTag = mapSizeToHeaderTag[size]
        return (
            <div
                className={classNames(cls.Text, {}, [
                    className,
                    cls[theme],
                    cls[size],
                    cls[align],
                ])}
            >
                {title && (
                    <HeaderTag
                        className={cls.title}
                        data-testid={`${dataTestId}.Header`}
                    >
                        {title}
                    </HeaderTag>
                )}
                {text && (
                    <p
                        style={style}
                        data-testid={`${dataTestId}.Paragraph`}
                        className={cls.text}
                    >
                        {text}
                    </p>
                )}
            </div>
        )
    }
)
