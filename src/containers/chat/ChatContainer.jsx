import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChatMessageList from '../../components/chat/ChatMessageList';
import ChatMessageWriteBox from '../../components/chat/ChatMessageWriteBox';
import RecipeNotFound from '../../components/recipe/RecipeNotFound';
import { ChatBox } from '../../layouts/chat/Chat';
import { changeMessage, writeMessage } from '../../redux/chat';
import {
  isEmpty,
  isMatch,
  getFirstSplit,
} from '../../utils/utils';

const ChatContainer = () => {
  const dispatch = useDispatch();
  const lastChat = useRef();

  const {
    user: {
      userId,
    }, chat: {
      chatList, message,
    },
  } = useSelector((state) => ({
    user: state.user,
    chat: state.chat,
  }));

  if (isEmpty(userId)) {
    return (
      <RecipeNotFound />
    );
  }

  const owner = getFirstSplit(userId)('@');

  const onChangeMessage = (event) => {
    const { name, value } = event.target;
    dispatch(changeMessage({ name, value }));
  };

  const onKeyUpMessage = async (event) => {
    if (isEmpty(message.trim())) {
      return;
    }

    if (isMatch(event.key)('Enter')) {
      await dispatch(writeMessage());
      lastChat.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onSubmit = async () => {
    if (isEmpty(message)) {
      return;
    }

    await dispatch(writeMessage());
    lastChat.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChatBox>
      <ChatMessageList
        chatList={chatList}
        owner={owner}
        lastChat={lastChat}
      />
      <ChatMessageWriteBox
        message={message}
        onChangeMessage={onChangeMessage}
        onKeyUpMessage={onKeyUpMessage}
        onSubmit={onSubmit}
      />
    </ChatBox>
  );
};

export default ChatContainer;
