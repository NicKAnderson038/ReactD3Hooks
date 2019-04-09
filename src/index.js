import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import Pie from "./PieHooks";

import "./styles.css";

function App() {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );

  return (
    <div className="App">
      <br />
      <div>
        <Pie
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <br />
      <br />
      <div className="Info">
        <span className="label">Animated Pie D3</span>
        <span className="label">JSX Elements: svg & g</span>
        <span className="label">React Hooks: useEffect & useRef</span>
      </div>
      <br />
      <div>
        <button onClick={() => setData(generateData())}>Transform</button>
      </div>
      <br />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
