import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'some text',
    text: 'some text'
};

export const Error = Template.bind({});
Error.args = {
    title: 'some text',
    text: 'some text',
    theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'some text',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'some text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'some text',
    text: 'some text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'some text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'some text'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'some text',
    text: 'some text',
    size: TextSize.L
}

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'some text',
    text: 'some text',
    size: TextSize.M
}

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'some text',
    text: 'some text',
    size: TextSize.S
}
