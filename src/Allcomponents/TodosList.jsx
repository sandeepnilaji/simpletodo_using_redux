import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addtodo } from "../Allredux/action";
function TodosList() {
  const todo = useSelector((state) => state.todo);
  //   console.log(todo);
  const dispatch = useDispatch();
  const history = useHistory();
  const getTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3001/todos");
      dispatch(addtodo(res.data));
      //   console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  const deleteTodo = async (e) => {
    await axios
      .delete(`http://localhost:3001/todos/${e}`)
      .then((re) => getTodos());
  };
  return todo === [] ? (
    "empty"
  ) : (
    <div>
      {todo.map((e) => (
        <div key={e.id}>
          <div
            onClick={() => {
              history.push(`/list/${e.id}`);
            }}
            style={{
              marginTop: "20px",
              color: "red",
              border: "1px solid black",
              borderBottom: "none",
              width: "300px",
              margin: "auto",
              cursor: "pointer",
            }}
          >
            {" "}
            Title: {e.title}
          </div>
          <div
            style={{
              color: "green",
              border: "1px solid black",
              borderTop: "none",
              width: "300px",
              margin: "auto",
            }}
          >
            Status: {e.status} <br />
            <button onClick={() => deleteTodo(e.id)}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={() => history.push("/notcompleted")}>
        Not Completed
      </button>
    </div>
  );
}

export default TodosList;
