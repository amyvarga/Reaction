import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from '../state/reducer';
import Context from '../context';
import PublishMessage from './PublishMessage';
import SetUserName from './Username/SetUserName';
import MessageBoard from './MessageBoard';
import PubSub from '../pubsub';

const pubsub = new PubSub();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;
        dispatch(message);
      }
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <hr />
      <SetUserName />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
