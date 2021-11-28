import { HTMLAttributes } from 'react';

import { ChatFormStyles } from './styles';

export interface Props extends HTMLAttributes<HTMLFormElement>, ChatFormStyles {
  // Hooks
  onFormSubmit?: (value: string) => void;
  // Render Functions
  renderChatForm?: (props: Props) => React.FC<Props>;
}
