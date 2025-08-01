import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmployeeView from "./components/EmployeeView";
import { data, names } from "./data";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [showEmployee, setIsShownEmployee] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Jordan</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setIsShownEmployee(true)}>Show employees</button>
        {showEmployee && (
          <div>
            {data.map((employee) => {
              return <EmployeeView employee={employee} key={employee.id} />;
            })}
          </div>
        )}
        <button onClick={() => setIsShown(true)}>Show names</button>
        {isShown && (
          <div>
            {names.map((name, index) => {
              console.log(index);
              return <p key={index}>{name}</p>;
            })}
          </div>
        )}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
