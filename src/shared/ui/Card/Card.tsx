import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => (
    <div {...otherProps} className={classNames(cls.Card, {}, [className])}>
        {children}
    </div>
))
