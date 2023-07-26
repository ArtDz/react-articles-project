import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = memo(
    ({
        className,
        onCancel,
        onAccept,
        feedbackTitle,
        hasFeedback,
        title,
        rate = 0,
    }: RatingCardProps) => {
        const { t } = useTranslation()
        const [isModalOpen, setIsModalOpen] = useState(false)
        const [starsCount, setStarsCount] = useState(rate)
        const [feedback, setFeedback] = useState('')

        const onSelectStars = useCallback(
            (selectedStarsCount: number) => {
                setStarsCount(selectedStarsCount)
                if (hasFeedback) {
                    setIsModalOpen(true)
                } else {
                    onAccept?.(selectedStarsCount)
                }
            },
            [hasFeedback, onAccept]
        )

        const acceptHandle = useCallback(() => {
            setIsModalOpen(false)
            onAccept?.(starsCount, feedback)
        }, [feedback, onAccept, starsCount])

        const cancelHandle = useCallback(() => {
            setIsModalOpen(false)
            onCancel?.(starsCount)
        }, [onCancel, starsCount])

        const modalContent = (
            <VStack max gap="32">
                <Text title={feedbackTitle} />
                <Input
                    value={feedback}
                    onChange={setFeedback}
                    id="rating-input"
                    labelName="Отзыв"
                    name="rating-input"
                    placeholder="rating-input"
                    data-testid="RatingCard.Input"
                />
                <HStack max gap="16" justify="end">
                    <Button
                        data-testid="RatingCard.Close"
                        onClick={cancelHandle}
                        theme={ThemeButton.GLOW_ON_HOVER_DANGER}
                    >
                        {t('Закрыть')}
                    </Button>
                    <Button
                        data-testid="RatingCard.Send"
                        onClick={acceptHandle}
                        theme={ThemeButton.GLOW_ON_HOVER}
                    >
                        {t('Отправить')}
                    </Button>
                </HStack>
            </VStack>
        )

        return (
            <Card data-testid="RatingCard" max className={className}>
                <VStack align="center" gap="8" max>
                    <Text
                        title={starsCount ? t('Спасибо за оценку!') : title}
                    />
                    <StarRating
                        selectedStars={starsCount}
                        onSelect={onSelectStars}
                    />
                </VStack>
                <BrowserView>
                    <Modal isOpen={isModalOpen} lazy>
                        {modalContent}
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                        {modalContent}
                    </Drawer>
                </MobileView>
            </Card>
        )
    }
)
