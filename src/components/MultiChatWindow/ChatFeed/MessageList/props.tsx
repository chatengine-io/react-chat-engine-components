import { ChatObject, MessageObject } from '../../../../interfaces';

import { MessageListStyles } from './styles';

import { MessageProps } from './Message/props';
export interface MessageListProps extends MessageListStyles {
  // Data
  messages: MessageObject[];
  chat?: ChatObject;
  username?: string;
  timezoneOffset?: number;
  // State
  hasMoreMessages?: boolean;
  // Hooks
  onMessageLoaderShow?: () => void;
  onMessageLoaderHide?: () => void;
  onBottomMessageShow?: () => void;
  onBottomMessageHide?: () => void;
  // Render Functions
  renderMessageList?: (
    props: MessageListProps
  ) => JSX.Element | Element | React.FC<MessageListProps>;
  renderMessage?: (
    props: MessageProps
  ) => JSX.Element | Element | React.FC<MessageProps>;
}
