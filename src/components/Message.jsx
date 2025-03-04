import React from 'react';
import { replaceEmojiWithImage } from '../utils/emojiUtils';

const Message = ({ msg }) => (
  <p
    className={msg.role}
    dangerouslySetInnerHTML={{
      __html: replaceEmojiWithImage(msg.parts[0].text),
    }}
  />
);

export default Message;
