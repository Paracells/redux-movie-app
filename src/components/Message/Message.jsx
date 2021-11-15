import React from 'react';
import style from './Message.module.scss';
function Message({ text = 'Loading...' }) {
  return (
    <div>
      <h1 className={style.loader}>{text}</h1>
    </div>
  );
}

export default Message;
