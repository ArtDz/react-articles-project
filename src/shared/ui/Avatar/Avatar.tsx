import { CSSProperties, useMemo } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { AppImage } from '../AppImage'
import UserIcon from '../../assets/icons/user-filled.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

export const Avatar = ({
    className,
    src,
    size = 100,
    alt = 'avatar',
    fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {}
    const styles: CSSProperties = useMemo(
        () => ({
            width: size,
            height: size,
        }),
        [size]
    )

    const fallback = <Skeleton width={size} height={size} borderRadius="50%" />
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            Svg={UserIcon}
            width={size}
            height={size}
        />
    )

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, mods, [className])}
            src={src}
            style={styles}
            alt={alt}
        />
    )
}
