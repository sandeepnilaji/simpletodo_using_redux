import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function TodosInput() {
  const [text, setText] = useState("");
  const history = useHistory();
  const addtodo = async () => {
    const response = await axios.post("http://localhost:3001/todos", {
      title: text,
      status: "false",
    });
    console.log(response.data);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addtodo}>ADD</button>
      <br />
      <button
        onClick={() => {
          history.push("/list");
        }}
      >
        Check List
      </button>
    </div>
  );
}

export default TodosInput;
