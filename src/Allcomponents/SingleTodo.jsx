import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { singletodo } from "../Allredux/action";
function SingleTodo() {
  const single = useSelector((state) => state.single);
  const params = useParams();
  const dispatch = useDispatch();

  const singleto = async () => {
    try {
      const re = await axios.get(`http://localhost:3001/todos/${params.id}`);
      dispatch(singletodo(re.data));
      console.log(re.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    singleto();
  }, []);
  const handleToggle = async (e) => {
    try {
      await axios
        .put(`http://localhost:3001/todos/${params.id}`, {
          ...e,
          status: "true",
        })
        .then((res) => dispatch(singletodo(res.data)));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {single.map((e) => (
        <div key={e.id}>
          <p>{e.title}</p>
          <p>{e.status}</p>
          <button onClick={() => handleToggle(e)}>Toggle</button>
        </div>
      ))}
    </div>
  );
}

export default SingleTodo;
