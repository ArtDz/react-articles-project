import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationList } from './NotificationList';

export default {
    title: 'changeThisName/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
