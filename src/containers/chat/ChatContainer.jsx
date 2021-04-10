/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChatMessageList from '../../components/chat/ChatMessageList';
import ChatMessageWriteBox from '../../components/chat/ChatMessageWriteBox';
import Loading from '../../components/common/Loading';
import RecipeNotFound from '../../components/recipe/RecipeNotFound';
import { ChatBox } from '../../layouts/chat/Chat';
import { changeMessage, writeMessage } from '../../redux/chat';
import {
  isEmpty,
  isMatch,
  isNotEmpty,
  getFirstSplit,
} from '../../utils/utils';

const ChatContainer = () => {
  const dispatch = useDispatch();
  const lastChat = useRef();
  const [loadingTime, setLoadingTime] = useState(0);

  const checkCurrentSecond = (value) => isMatch(loadingTime)(value);

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

  // FIXME CASE: 로그인 후 /chat 에서 로그아웃 후에는 무한 로딩 발생
  useEffect(() => {
    // XXX CASE: Terminate Sequence (Result: Loading Failed)
    if (checkCurrentSecond(-1)) {
      return;
    }

    // XXX CASE: Loading Failed
    if (checkCurrentSecond(5) && isEmpty(userId)) {
      setLoadingTime(-1);
      return;
    }

    // XXX CASE: Loading Success
    if (checkCurrentSecond(5) && isNotEmpty(userId)) {
      return;
    }

    const timeout = setTimeout(() => setLoadingTime(loadingTime + 1), 1000);

    return () => clearTimeout(timeout);
  }, [loadingTime]);

  if (isEmpty(userId) && isMatch(loadingTime)(-1)) {
    return (
      <RecipeNotFound />
    );
  }

  if (isEmpty(userId)) {
    return (
      <Loading />
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
