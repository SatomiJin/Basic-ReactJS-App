import { useState } from "react";
import "./css/App.css";
function App() {
  //
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos != null) {
      return storageTodos;
    } else {
      return [];
    }
  });
  console.log(todos);
  const handleSubmit = () => {
    setTodos((prev) => {
      const newTodos = [...prev, todo];
      //lưu vào localStorage
      const jsonTodos = JSON.stringify(newTodos);
      localStorage.setItem("todos", jsonTodos);
      return [...prev, todo];
    });
    setTodo("");
  };
  return (
    <>
      <div className="App">
        <center>
          <div className="add-todo">
            <input
              value={todo}
              type="text"
              className="input-todo"
              onChange={(e) => setTodo(e.target.value)}
            />
            <button className="add" type="submit" onClick={handleSubmit}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="list-todo">
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
