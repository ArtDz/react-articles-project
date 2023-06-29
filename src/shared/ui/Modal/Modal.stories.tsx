import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio, dolorum eligendi et excepturi explicabo impedit laboriosam odio! Eaque, quos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, itaque!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio, dolorum eligendi et excepturi explicabo impedit laboriosam odio! Eaque, quos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, itaque!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
