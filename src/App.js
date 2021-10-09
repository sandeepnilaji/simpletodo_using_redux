import { Route, Switch } from "react-router";
import NotCompleted from "./Allcomponents/NotCompleted";
import SingleTodo from "./Allcomponents/SingleTodo";
import TodosInput from "./Allcomponents/TodosInput";
import TodosList from "./Allcomponents/TodosList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <TodosInput />
        </Route>
        <Route exact path="/list">
          <TodosList />
        </Route>
        <Route path="/list/:id">
          <SingleTodo />
        </Route>
        <Route path="/notcompleted">
          <NotCompleted />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
