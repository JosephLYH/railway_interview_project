import React from 'react';
import './App.css';

const host = process.env.SERVER_HOST || 'localhost';
const serverPort = Number(process.env.SERVER_PORT) || 3001;

const spinUp = async () => {
  console.log('Spinning up a container');
  fetch(`http://${host}:${serverPort}/spin_up`)
    .then((res) => {console.log('Container spun up')})
    .catch((err) => {console.error(err);});
}

const spinDown = async () => {
  console.log('Spinning down a container');
  fetch(`http://${host}:${serverPort}/spin_down`)
    .then((res) => {console.log('Container spun down')})
    .catch((err) => {console.error(err);});
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={spinUp}>
          Spin up
        </button>
        <button onClick={spinDown}>
          Spin down
        </button>
      </header>
    </div>
  );
}
