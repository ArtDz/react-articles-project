import { classNames } from 'shared/lib/classNames/classNames'
import React, {
    ReactNode, useCallback, useEffect, useRef, useState
} from 'react'
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
    lazy?: boolean
}

export const Modal = ({
    className, children, isOpen, onClose, lazy
}: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }
    const onContentCLick = (e: React.MouseEvent) => e.stopPropagation()

    const closeHandler = useCallback(() => onClose && onClose(), [onClose])

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
        }
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted) {
        return null
    }

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
