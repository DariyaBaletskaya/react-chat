import React from "react";
import { HeaderContainer } from "./Header/HeaderContainer";
import { MessageListContainer } from "./MessageList/MessageListContainer";
import { InputContainer } from "./Input/InputContainer";
import MessageModal from "./MessageModal";
const Chat = () => {
  return (
    <div>
      <HeaderContainer />
      <MessageListContainer />
      <InputContainer />
      <MessageModal />
    </div>
  );
};

export default Chat;
