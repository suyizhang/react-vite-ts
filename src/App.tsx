import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">React + Vite</h1>
      <h2>On CodeSandbox!</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR. asd 
        </p>

        <p>
          Tip: you can use the inspector button next to address bar to click on
          components in the preview and open the code in the editor!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
