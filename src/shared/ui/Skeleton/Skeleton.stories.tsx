import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: '100%',
    height: 200
};

export const Circle = Template.bind({});
Circle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    width: '100%',
    height: 200
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({});
CircleDark.args = {
    borderRadius: '50%',
    width: 100,
    height: 100
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryNew = Template.bind({});
PrimaryNew.args = {
    width: '100%',
    height: 200
};
PrimaryNew.decorators = [ThemeDecorator(Theme.NEW)]

export const CircleNew = Template.bind({});
CircleNew.args = {
    borderRadius: '50%',
    width: 100,
    height: 100
};
CircleNew.decorators = [ThemeDecorator(Theme.NEW)]
