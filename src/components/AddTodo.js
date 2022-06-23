import React from 'react';

export default function AddTodo({ addTodo }) {
  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
      <input
        type="text"
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <button className="btn btn-prinmary">Ajouter</button>
    </div>
  );
}
