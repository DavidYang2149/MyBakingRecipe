import React from 'react';

import ChatMessage from './ChatMessage';
import { ChatMessageItems } from '../../layouts/chat/Chat';
import { isNotEmpty, isNotArray } from '../../utils/utils';

const ChatMessageList = ({ chatList, owner }) => {
  if (isNotArray(chatList)) {
    return (
      <></>
    );
  }

  return (
    <ChatMessageItems>
      {(
        isNotEmpty(chatList.length) && chatList.map((chat) => {
          return (
            <ChatMessage
              key={chat.created}
              chat={chat}
              owner={owner}
            />
          );
        })
      )}
    </ChatMessageItems>
  );
};

export default React.memo(ChatMessageList);
