import React, {useCallback, useEffect, useState} from "react";
import {GiftedChat} from 'react-native-gifted-chat';

const ChatWindow = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const user = route.params.item;
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: user.name,
                    avatar: user.avatar_url,
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}
export default ChatWindow;