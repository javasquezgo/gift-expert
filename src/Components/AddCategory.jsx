import { useState } from "react";

function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    //Esto es una pequeña validación para evitar insertar el campo vacío
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

export { AddCategory };
