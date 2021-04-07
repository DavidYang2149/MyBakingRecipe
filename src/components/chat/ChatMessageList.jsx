import React, { useEffect } from 'react';

import ChatMessage from './ChatMessage';
import { ChatMessageItems } from '../../layouts/chat/Chat';
import { isNotEmpty, isNotArray } from '../../utils/utils';

const ChatMessageList = ({ chatList, owner, lastChat }) => {
  if (isNotArray(chatList)) {
    return (
      <></>
    );
  }

  useEffect(() => {
    lastChat.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

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
      <div ref={lastChat} />
    </ChatMessageItems>
  );
};

export default React.memo(ChatMessageList);
