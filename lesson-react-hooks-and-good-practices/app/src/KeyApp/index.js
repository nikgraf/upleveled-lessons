import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: "aaa", name: "Anna", color: "blue" },
    { id: "bbb", name: "Max", color: "green" },
    { id: "ccc", name: "Francis", color: "red" }
  ]);
  return (
    <div>
      <ul>
        {/* {users.map(user => { */}
        {users.map((user, index) => {
          console.log(index);
          return (
            <li key={index} style={{ color: user.color }}>
              {user.name}
            </li>
          );
        })}
      </ul>
      <button
        onClick={e => {
          // flip the last two
          setUsers([users[0], users[2], users[1]]);
        }}
      >
        Flip
      </button>
    </div>
  );
}

export default App;
