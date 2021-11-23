import React, { useState } from 'react';

import { Props } from './props';
import { myStyles, theirStyles } from './styles';

import { Dot } from '../../../../Components/Dot';
import { Avatar } from '../../../../Components/Avatar';

import { DateTime } from './DateTime';

import { File } from '../../../../Components/File';
import { Image } from '../../../../Components/Image';

import { isImage, getFileName } from '../../../../util/file';
import { formatTime, getDateTime } from '../../../../util/dateTime';

export const Message: React.FC<Props> = ({
  lastMessage = null,
  message,
  nextMessage = null,
  chat = null,
  isSending = false,
  isMyMessage = false,
  showDateTime = false,
  // Styles
  messageStyle = {},
  messageDateTimeStyle = {},
  messageSenderUsernameStyle = {},
  messageAttachmentsStyle = {},
  messageAttachmentsImageStyle = {},
  messageAttachmentsFileStyle = {},
  messageBodyStyle = {},
  messageTimeTagStyle = {},
  messageBubbleStyle = {},
  messageReadsStyle = {},
  messageReadStyle = {},
  messageAvatarStyle = {},
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const styles = isMyMessage ? myStyles : theirStyles;

  const topRadius =
    !lastMessage || lastMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const bottomRadius =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '1.3em'
      : '0.3em';
  const borderStyle = {
    borderRadius: isMyMessage
      ? `1.3em ${topRadius} ${bottomRadius} 1.3em`
      : `${topRadius} 1.3em 1.3em ${bottomRadius}`,
  };
  const sendingStyle = isSending ? { backgroundColor: '#40a9ff' } : {};

  const paddingBottom =
    !nextMessage || nextMessage.sender_username !== message.sender_username
      ? '12px'
      : '2px';

  const text: string =
    message.text !== null
      ? message.text.replace(/<a /g, `<a style="color: 'white';" `)
      : '';

  const renderAttachments = (renderImage: boolean) => {
    const attachments =
      message && message.attachments ? message.attachments : [];

    return attachments.map((attachment, index) => {
      const fileName = getFileName(attachment.file);

      if (renderImage && isImage(fileName)) {
        return (
          <Image
            key={`attachment_${index}`}
            url={attachment.file !== null ? attachment.file : undefined}
            style={{
              ...styles.messageAttachmentsImageStyle,
              ...messageAttachmentsImageStyle,
            }}
          />
        );
      } else if (!renderImage && !isImage(fileName)) {
        return (
          <File
            key={`attachment_${index}`}
            url={attachment.file !== null ? attachment.file : undefined}
            style={{
              ...styles.messageAttachmentsFileStyle,
              ...messageAttachmentsFileStyle,
            }}
          />
        );
      } else {
        return <div key={`attachment_${index}`} />;
      }
    });
  };

  const renderReads = () => {
    const members = chat !== null ? chat.people : [];
    return members.map((chatPerson, index) => {
      return (
        <Dot
          key={`read_${index}`}
          avatarUrl={chatPerson.avatar}
          username={chatPerson.username}
          visible={message.id === chatPerson.last_read}
          style={{
            ...styles.messageReadStyle,
            ...messageReadStyle,
          }}
        />
      );
    });
  };

  return (
    <div
      className={`ce-${isMyMessage ? 'my' : 'their'}-message`}
      style={{
        ...styles.messageStyle,
        ...{ paddingBottom },
        ...messageStyle,
      }}
    >
      {showDateTime && (
        <DateTime
          created={message.created}
          dateTimeStyle={{
            ...styles.messageDateTimeStyle,
            ...messageDateTimeStyle,
          }}
        />
      )}

      {(lastMessage === null ||
        lastMessage.sender_username !== message.sender_username) && (
        <div
          style={{
            ...styles.messageSenderUsernameStyle,
            ...messageSenderUsernameStyle,
          }}
          className={`ce-${
            isMyMessage ? 'my' : 'their'
          }-message-sender-username`}
        >
          {message.sender_username}
        </div>
      )}

      <div
        style={{
          ...styles.messageAttachmentsStyle,
          ...messageAttachmentsStyle,
        }}
        className={`
          ce-${isMyMessage ? 'my' : 'their'}-message-attachments 
          ce-${isMyMessage ? 'my' : 'their'}-message-images
        `}
      >
        {renderAttachments(true)}
      </div>

      <div
        style={{
          ...styles.messageAttachmentsStyle,
          ...messageAttachmentsStyle,
        }}
        className={`
            ce-${isMyMessage ? 'my' : 'their'}-message-attachments 
            ce-${isMyMessage ? 'my' : 'their'}-message-files
          `}
      >
        {renderAttachments(false)}
      </div>

      {message.text !== null && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            ...styles.messageBodyStyle,
            ...messageBodyStyle,
          }}
        >
          {isMyMessage && (
            <span
              className="ce-my-message-timestamp"
              style={{
                ...styles.messageTimeTagStyle,
                ...{ opacity: hovered ? '1' : '0' },
                ...messageTimeTagStyle,
              }}
            >
              {formatTime(getDateTime(message.created, 0) as Date)}
            </span>
          )}

          <div
            className={`
              ce-${isMyMessage ? 'my' : 'their'}-message-body
              ${isSending && 'ce-my-message-sending-body'}
            `}
            style={{
              ...styles.messageBubbleStyle,
              ...borderStyle,
              ...sendingStyle,
              ...messageBubbleStyle,
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>

          {!isMyMessage && (
            <span
              className="ce-their-message-timestamp"
              style={{
                ...styles.messageTimeTagStyle,
                ...{ opacity: hovered ? '1' : '0' },
                ...messageTimeTagStyle,
              }}
            >
              {formatTime(getDateTime(message.created, 0) as Date)}
            </span>
          )}
        </div>
      )}

      <div
        style={{
          ...styles.messageReadsStyle,
          ...messageReadsStyle,
        }}
        className={`ce-${isMyMessage ? 'my' : 'their'}-reads-row`}
      >
        {renderReads()}
      </div>

      <Avatar
        username={message.sender_username}
        style={{
          ...styles.messageAvatarStyle,
          ...messageAvatarStyle,
        }}
        avatarUrl={
          message.sender &&
          message.sender !== null &&
          message.sender.avatar !== null
            ? message.sender.avatar
            : undefined
        }
      />
    </div>
  );
};
