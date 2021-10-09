import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notcomptodo } from "../Allredux/action";
function NotCompleted() {
  const { todo, notcompltd } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    notdone();
  }, []);

  const notdone = () => {
    const arr = todo.filter((e) => e.status === "true");
    dispatch(notcomptodo(arr));
  };

  return notcompltd.map((e) => (
    <div
      key={e.id}
      style={{
        color: "red",
        width: "300px",
        margin: "auto",
        height: "50px",
        border: "1px solid black",
      }}
    >
      Title :{e.title}
    </div>
  ));
}

export default NotCompleted;
