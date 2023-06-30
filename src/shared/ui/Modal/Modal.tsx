import { classNames } from 'shared/lib/classNames/classNames'
import React, {
    ReactNode, useCallback, useEffect, useRef, useState
} from 'react'
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = ({
    className, children, isOpen, onClose,
}: ModalProps) => {
    // const [isClosing, setIsClosing] = useState(false)
    // const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        // [cls[theme]]: true,
    }

    const onContentCLick = (e: React.MouseEvent) => e.stopPropagation()

    const closeHandler = useCallback(() => onClose && onClose(), [onClose])
    // if (onClose) {
    //     setIsClosing(true)
    //     timerRef.current = setTimeout(() => {
    //         onClose()
    //         setIsClosing(false)
    //     }, ANIMATION_DELAY)
    // }
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
            // clearTimeout(timerRef.current)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div onClick={onContentCLick} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
