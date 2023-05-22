import React from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';
import FormTodo from './component/form';
import Todo from './component/todo';
import MyVerticallyCenteredModal from './component/modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'This is a sample todo',
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <body style={{ backgroundColor: '#8758ff' }}>
        <div
          className="app"
          style={{
            backgroundColor: '#1A1A40',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5rem',
            padding: '2rem',
            borderRadius: '8px',
            marginLeft: '5rem',
            marginRight: '5rem',
            marginBottom: '5rem',
          }}
        >
          <div className="container">
            <div className="top">
              <h1 className="text-start mb-4">Todo List </h1>
              <div className="tombol mb-4 text-end">
                <Button
                  onClick={() => setModalShow(true)}
                  style={{ backgroundColor: '#8758ff', border: '0px' }}
                >
                  <em className="fas fa-plus"></em>
                  New Task
                </Button>
              </div>
            </div>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              Body={<FormTodo addTodo={addTodo} />}
              Title="Add Todo"
            />
            <div>
              {todos.map((todo, index) => (
                <Card
                  style={{
                    backgroundColor: todo.isDone ? '#4f9e67' : '#ae90fc',
                    marginTop: '1.2em',
                  }}
                >
                  <Card.Body>
                    <Todo
                      key={index}
                      index={index}
                      todo={todo}
                      markTodo={markTodo}
                      removeTodo={removeTodo}
                    />
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
