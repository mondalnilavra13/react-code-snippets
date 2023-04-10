import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(<tr key={i}><td>{i}</td><td>{number * i}</td></tr>);
    }
    return table;
  };

  return (
    <div>
      <h1>Number Table Generator</h1>
      <label htmlFor="numberInput">Enter a number:</label>
      <input
        type="number"
        id="numberInput"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {generateTable()}
        </tbody>
      </table>
    </div>
  );
}

export default App;


///
/*
import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(<tr key={i}><td>{i}</td><td>{number * i}</td></tr>);
    }
    return table;
  };

  const updateNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <h1>Number Table Generator</h1>
      <label htmlFor="numberInput">Number:</label>
      <input
        type="number"
        id="numberInput"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={updateNumber}>Random Number</button>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {generateTable()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
*/
/*
import { useState } from "react";
import React from "react"

function App() {
  const [logs, setLogs] = useState([]);

  const handleMouseOver = () => {
    const newLog = { time: new Date().toLocaleString(), eventName: "in" };
    setLogs((prevLogs) => [...prevLogs, newLog]);
  };

  const handleMouseOut = () => {
    const newLog = { time: new Date().toLocaleString(), eventName: "out" };
    setLogs((prevLogs) => [...prevLogs, newLog]);
  };

  return (
    <div>
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        This is heading 1
      </h1>
      <h2>This is heading 2</h2>
      <div>This is a div</div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
*/
/*
import React, { useState } from 'react';

function GreetingArray() {
  const [greetings, setGreetings] = useState(['Hello', 'Hi', 'Hey']);

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  const handleClick = () => {
    const index = greetings.indexOf(currentGreeting);
    setCurrentGreeting(greetings[(index + 1) % greetings.length]);
  };

  return (
    <div>
      <h1>{currentGreeting} World!</h1>
      <button onClick={handleClick}>Next Greeting</button>
    </div>
  );
}

export default GreetingArray;
*/