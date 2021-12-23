import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default function ChildB(props) {
  return (
    <div>
      <p>{props.user}</p>
    </div>
  );
}
