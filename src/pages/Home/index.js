import React, { useState } from "react";

function Home(props) {
  const [input, setInput] = useState("");

  let handleLogin = () => {
    props.login(input);
  };
  return (
    <div className="todo-app">
      <h1>HOME</h1>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleLogin}>
        Add Todo
      </button>
    </div>
  );
}

export default Home;
