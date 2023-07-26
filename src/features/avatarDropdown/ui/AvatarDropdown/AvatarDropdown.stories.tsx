import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'

export default {
    title: 'changeThisName/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = args => (
    <AvatarDropdown {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
