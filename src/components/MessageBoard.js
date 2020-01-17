import React from 'react';
import { useAppContext } from './hooks/useAppContext';
import CreateReaction from './CreateReaction';
import MessageReactions from './MessageReactions';

function MessageBoard() {
  const { state: { messages, reactionsMap } } = useAppContext();
  return (
    <div>
      {messages.map(message => {
        const { id, text, timestamp, username } = message;
        return (
          <div key={id}>
            <h3>{new Date(timestamp).toLocaleString()}</h3>
            <p>{text}</p>
            <p>~ {username}</p>
            <CreateReaction messageId={id} />
            <MessageReactions messageReactions={reactionsMap[id]} />
            <hr />
          </div>
        )
      })}
    </div>
  )
}


export default MessageBoard;