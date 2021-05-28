import { useReducer } from 'react';
import './TodoApp.css';
import { ITodo } from '../interfaces/interfaces';
import { todoReducer } from '../reducer/todoReducer';

const initialState: ITodo[] = [{
  id: new Date().getTime(),
  desc: 'Learn React',
  done: false,
}]

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);

  return (
    <div>
      <h1>TodoApp <span className="badge bg-danger rounded-pill">{todos.length}</span></h1>
      <hr />

      <ul className="list-group list-group-flush">
        {
          todos.map(todo => (
            <li key={todo.id} className="list-group-item">
              {todo.desc}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
