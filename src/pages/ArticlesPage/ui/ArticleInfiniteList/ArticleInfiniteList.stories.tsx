import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleInfiniteList } from './ArticleInfiniteList'

export default {
    title: 'changeThisName/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>

const Template: ComponentStory<typeof ArticleInfiniteList> = args => (
    <ArticleInfiniteList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
