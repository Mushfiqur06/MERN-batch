import { todosData } from "./todos";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(todosData);
  const [createTodo, setCreateTodo] = useState("");

  const handleCreateTodo = () => {
    if (!createTodo.length) {
      alert("Please write something");
    } else {
      const tempData = data;
      tempData.push({
        id: todosData.length + 1,
        title: createTodo,
      });
      setCreateTodo("");
      console.log(tempData);
      setData(tempData);
    }
  };

  return (
    <div className="container">
      <div className="search_wrapper">
        <h2>Craete your todo</h2>
        <div className="input_wrapper">
          <div style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Type Anything"
              onChange={(e) => setCreateTodo(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleCreateTodo} className="submit_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="todos_wrapper">
        {data.map((item) => (
          <div className="todo" key={item.id}>
            <div>
              <h4>{item?.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
