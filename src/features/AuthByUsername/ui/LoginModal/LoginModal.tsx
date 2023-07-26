import { Suspense } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/Modal'
import { Loader } from '@/shared/ui/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(cls.LoginModal, {}, [className])}
    >
        <Suspense fallback={<Loader />}>
            {/* убрать задержку загрузки в конце курса */}
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
)
