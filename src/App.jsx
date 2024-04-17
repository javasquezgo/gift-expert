import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

function App() {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* Title */}
      <h1>Gift Expert</h1>

      {/* Input */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/* Listado de gift */}
      <ul>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
