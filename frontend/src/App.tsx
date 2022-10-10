import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" style={{ width: '10%', height: '10%' }}/>
      </header>
      <body>
        <h1>新日本紀行</h1>
        <Counter />
        <h3>長島ダム</h3>
        <h3>宇和島</h3>
        <p>
          <b>嫁さん垣</b>とは、嫁入り行列を足止めし、嫁さんをゆっくり見物しようという古い習わし
        </p>
        <p>ボス猿三郎君、君がボスについてやは一年</p>
        <p>海中の花畑で、肴のファッションショー</p>
      </body>
    </div>
  );
}

export default App;
