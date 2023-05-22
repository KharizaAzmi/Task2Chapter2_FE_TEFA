import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-2">
      <Form.Group>
        {/* <Form.Label>
          <b>Add Todo</b>
        </Form.Label> */}
        <Form.Control
          type="text"
          className="input mb-4 mt-3"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <footer className="text-end">
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: '#8758ff', border: '0px' }}
        >
          Submit
        </Button>
      </footer>
    </Form>
  );
}

export default FormTodo;
