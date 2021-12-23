import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ChildA from './childA';
import ChildB from './childB';
import './style.css';

export default function App() {
  const [user, setUser] = useState('yy');

  const setUserName = (val) => {
    setUser(val);
  };

  return (
    <div>
      <ChildA setUserName={setUserName}></ChildA>
      <ChildB user={user}></ChildB>
    </div>
  );
}
