import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
}

export const Avatar = ({ className, src, size }: AvatarProps) => {
    const mods: Mods = {}
    const styles: CSSProperties = useMemo(() => ({
        width: size || 100,
        height: size || 100
    }), [size])
    return (
        <img
            className={classNames(cls.Avatar, mods, [className])}
            src={src}
            style={styles}
            alt="avatar"
        />
    )
}
