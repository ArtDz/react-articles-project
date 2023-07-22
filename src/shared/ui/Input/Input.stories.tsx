import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Login',
    name: 'username',
    labelName: 'login',
    id: 'username'
}

export const PrimaryWithValue = Template.bind({});
PrimaryWithValue.args = {
    placeholder: 'Login',
    value: 'some_value',
    name: 'username',
    labelName: 'login',
    id: 'username'
}
