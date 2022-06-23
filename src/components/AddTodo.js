import React, { useState } from 'react';

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      addTodo(value);
      setValue('');
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={handleChange}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleClick} className="btn btn-prinmary">
        Ajouter
      </button>
    </div>
  );
}
