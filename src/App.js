import { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Button, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState(["one", "two", "three"]);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  let newTodos = todos.map((todo) => <p>{todo}</p>);
  useEffect(() => {
    console.log("--> ", todos);
  }, [todos]);
  return (
    <div className="App">
      <FormControl>
        <InputLabel>Write a ToDO</InputLabel>
        <Input type="text" value={input} onChange={handleChange} />
      </FormControl>

      <Button
        disabled={!input}
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleClick}
      >
        Add Todo
      </Button>
      <Todo todos={newTodos} />
    </div>
  );
}
export default App;
