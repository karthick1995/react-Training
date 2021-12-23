import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default function ChildA(props) {
  const [uname, setUname] = useState('');

  const setUserName = () => {
    props.setUserName(uname);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((el) => el.json())
      .then((res) => {
        console.log(res.id);
        setUname(res.id);
      })
      .catch((er) => {
        setUname(er);
      });
  });
  return (
    <div>
      <button onClick={setUserName}>click</button>
    </div>
  );
}
