import React from 'react';

import { ChatMessageItem, MyChatMessageItem } from '../../layouts/chat/Chat';
import { isMatch } from '../../utils/utils';

const ChatMessage = ({ chat, owner }) => {
  if (isMatch(chat.user)(owner)) {
    return (
      <MyChatMessageItem>
        <div>
          <div>
            <span>{chat.user}</span>
            <p>{chat.message}</p>
          </div>
          <img src="images/user-solid-circle.svg" alt="User" />
        </div>
      </MyChatMessageItem>
    );
  }

  return (
    <ChatMessageItem>
      <div>
        <img src="images/user-solid-circle.svg" alt="User" />
        <div>
          <span>{chat.user}</span>
          <p>{chat.message}</p>
        </div>
      </div>
    </ChatMessageItem>
  );
};

export default React.memo(ChatMessage);
