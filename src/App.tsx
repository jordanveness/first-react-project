import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type Data = {
  id: number;
  name: string;
  year: number;
  profession: string;
};

const names: string[] = ["Jordan", "John", "Jane", "Doe"];
const data: Data[] = [
  {
    id: 1,
    name: "Jordan",
    year: 1996,
    profession: "Doctor",
  },
  {
    id: 2,
    name: "John",
    year: 1998,
    profession: "Engineer",
  },
  {
    id: 3,
    name: "Jane",
    year: 1991,
    profession: "Teacher",
  },
  {
    id: 4,
    name: "Doe",
    year: 1990,
    profession: "Accountant",
  },
];

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
              const { name, profession } = employee;
              return (
                <p key={employee.id}>
                  {name}, {profession}
                </p>
              );
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
