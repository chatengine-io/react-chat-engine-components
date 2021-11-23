import { Properties } from 'csstype';

export interface AttachmentInputStyles {
  attachmentInputStyle?: Properties;
  attachmentInputIconStyle?: Properties;
}

export const styles: AttachmentInputStyles = {
  attachmentInputStyle: {
    height: '0px',
    display: 'inline',
    padding: '6px 12px',
    position: 'relative',
    bottom: '6px',
  } as Properties,
  attachmentInputIconStyle: {
    backgroundColor: 'white',
    border: '1px solid white',
    cursor: 'pointer',
  } as Properties,
};
