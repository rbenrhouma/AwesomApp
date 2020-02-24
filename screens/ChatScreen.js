import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default function CustomerScreen(props) {
  const { userID, Form } = props.route.params;

  const [name, setName] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    setMessages[
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any"
        }
      }
    ];
  }, []);

  const onSend = messages => {
    setMessages(messages);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      placeholder="Texte ici"
      isKeyboardInternallyHandled={true}
      showUserAvatar={true}
      showAvatarForEveryMessage={true}
      user={{
        _id: 1
      }}
    />
  );
}
const offset = 24;
const styles = StyleSheet.create();
