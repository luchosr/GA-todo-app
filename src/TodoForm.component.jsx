import React from "react";
import ReactGA from "react-ga4";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    ReactGA.event({
      action: "submit_action",
      category: "submit_category",
      label: "olaKeAse",
      value: "submit_value",
    });
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
