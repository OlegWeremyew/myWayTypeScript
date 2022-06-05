import React from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';
import { DialogPropsType } from '../types';

import { ReduxAddMessageForm } from './AddMessageForm';
import { Dialog } from './Dialog';
import { DialogsItem } from './DialogItem';
import style from './Dialogs.module.scss';
import { FormMessagesType } from './types';

export const Dialogs: React.FC<DialogPropsType> = ({
  messagesPage,
  addMessage,
}): ReturnComponentType => {
  const dialogsItem = messagesPage.users.map(user => (
    <DialogsItem key={user.id} name={user.name} id={user.id} img={user.img} />
  ));

  const message = messagesPage.messages.map(message => (
    <Dialog key={message.id} message={message.message} id={message.id} />
  ));

  const addNewMessage = (values: FormMessagesType): void => {
    addMessage(values.newMessageText);
  };

  return (
    <section className={style.dialogs}>
      <div className={style.dialogs__dialog}>
        <div className={style.dialogItem}>{dialogsItem}</div>
        <div className={style.messages}>{message}</div>
      </div>
      <ReduxAddMessageForm onSubmit={addNewMessage} />
    </section>
  );
};
