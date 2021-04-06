import styled from '@emotion/styled';

const ChatBox = styled.article`
  margin: 0 auto;
  /* text-align: center; */
  max-width: 600px;
  min-height: 300px;
  max-height: 600px;
`;

const ChatMessageItems = styled.ul`
  min-height: 300px;
  background-color: #f8f8ef;
  border-radius: 5px;
  padding: 20px 20px 10px 20px;
`;

const ChatMessageItem = styled.li`
  text-align: left;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;

  div {
    display:inline-flex;
  }

  div > div {
    display: block;
  }

  div > img {
    display: block;
    width: 40px;
    height: 40px;
    margin: 2px 5px;
    border-radius: 50%;
  }

  div > span {
    font-size: 1.1rem;
    font-weight: 700;
  }

  div > p {
    font-size: 1rem;
    font-weight: 400;
    border-radius: 25px 25px 25px 0px;
    padding: 10px 15px 10px 15px;
    color: black;
    background: #e5e5ea;
  }
`;

const MyChatMessageItem = styled.li`
  text-align: right;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row-reverse;

  div {
    display:inline-flex;
  }

  div > div {
    display: block;
  }

  div > img {
    width: 40px;
    height: 40px;
    margin: 2px 5px;
    border-radius: 50%;
  }

  div > span {
    font-size: 1.1rem;
    font-weight: 700;
  }

  div > p {
    font-size: 1rem;
    font-weight: 400;
    border-radius: 25px 25px 0px 25px;
    padding: 10px 15px 10px 15px;
    color: white;
    background: #0994f6;
  }
`;

const MessageBox = styled.div`
  display: flex;
  text-align: center;
`;

const MessageInput = styled.input`
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  background-color: #e4e7eb;
  width: 80%;
  height: 24px;
  padding: 1rem;
`;

const SendButton = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 0.25rem;
  width: 20%;
  height: 60px;
  padding: 1rem;
  cursor: pointer;
  opacity: 0.8;
  
  :hover {
    opacity: 1.0;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  :hover:enabled {
    opacity: 0.8;
    transition: 0.5s;
  }
`;

export {
  ChatBox,
  ChatMessageItems,
  ChatMessageItem,
  MyChatMessageItem,
  MessageBox,
  MessageInput,
  SendButton,
};
