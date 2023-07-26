import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss'
import StarIcon from '@/shared/assets/icons/star.svg'
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo(({
    className,
    selectedStars = 0,
    onSelect,
    size = 30
}: StarRatingProps) => {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map(starNumber => {
                return (
                    <Icon
                        className={classNames(
                            cls.starIcon,
                            { [cls.selected]: isSelected },
                            [currentStarsCount >= starNumber ? cls.hovered : cls.normal]
                        )}
                        Svg={StarIcon}
                        key={starNumber}
                        width={size}
                        height={size}
                        onMouseEnter={onHover(starNumber)}
                        onMouseLeave={onLeave}
                        onClick={onClick(starNumber)}
                        data-testid={`StarRating.${starNumber}`}
                        data-selected={currentStarsCount >= starNumber}
                    />
                )
            })}
        </div>
    )
})
