import React from 'react';

import { Meta, Story } from '@storybook/react';

import { MyMessage } from '.';
import { Props } from './props';

import { message, messagePlusAttachments } from '../util/mocks';

const meta: Meta = {
  title: 'ChatFeed/MyMessage',
  component: MyMessage,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => (
  <div style={{ maxWidth: '400px' }}>
    <MyMessage {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  message: message,
};

export const BetweenMessages = Template.bind({});
BetweenMessages.args = {
  lastMessage: message,
  message: message,
  nextMessage: message,
};

export const WithAttachments = Template.bind({});
WithAttachments.args = {
  message: messagePlusAttachments,
};
