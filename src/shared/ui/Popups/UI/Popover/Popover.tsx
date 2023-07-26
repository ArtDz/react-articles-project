import { Popover as HPopover } from '@headlessui/react'
import { ReactNode } from 'react'
import { DropdownDirection } from '@/shared/types/ui'
import { classNames } from '@/shared/lib/classNames/classNames'
import { mapDirectionClass } from '../../styles/consts'
import cls from './Popover.module.scss'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
    className?: string
    direction?: DropdownDirection
    trigger: ReactNode
    children: ReactNode
}

export function Popover(props: PopoverProps) {
    const { className, children, direction = 'bottom right', trigger } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <HPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
