import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="display">
      <div
        className="todo"
        style={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '18px',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>
            <div className="success" style={{ fontWeight: 'bold' }}>
              ✓
            </div>
          </Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>
            <div className="deleted" style={{ fontWeight: '500px' }}>
              ✕
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
