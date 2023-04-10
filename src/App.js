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