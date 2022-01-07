import "./App.css";
import Layout from "./components/Layout/Layout";
import { createContext } from "react";

const todo = ["выучить реакт", "поесть"];

export interface IToDoContext {
  todo: string[];
}

export const ToDoContext = createContext<IToDoContext>({ todo });

function App(): JSX.Element {
  return (
    <ToDoContext.Provider value={{ todo: todo }}>

            <Layout></Layout>

    </ToDoContext.Provider>
  );
}

export default App;
