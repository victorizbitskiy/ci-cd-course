import { useState } from "react";

function App() {
  const [state, setState] = useState(0)

  const increment = setState(prev => prev + 1)

  return (
    <div className="App">
      <button onClick={increment}>
        increment
      </button>
    </div>
  );
}

export default App;
