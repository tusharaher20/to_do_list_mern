import React, { useState } from "react";
import Create from "./Create";

function Home() {
  const [todos, settodos] = useState([]);

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No tasks yet... </h2>
        </div>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </div>
  );
}

export default Home;

// .map helps you do something with each item in a group (like toys) and create a new group with the changes you made.
