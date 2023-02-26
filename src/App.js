import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const FETCH_ADVICE_URL = "https://api.adviceslip.com/advice";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const {
      data: {
        slip: { advice },
      },
    } = await axios(FETCH_ADVICE_URL);

    setAdvice(advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="app">
      <div className="card">
        <div className="heading">{advice}</div>
        <div className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </div>
      </div>
    </div>
  );
};

export default App;
