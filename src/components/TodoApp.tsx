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

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {
              todos.map((todo, idx) => (
                <li key={todo.id} className="list-group-item">
                  <p className="text-center" >{idx + 1} - {todo.desc}</p>
                  <button className="btn btn-danger">Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <form action="post" className="d-grid gap-2">
            <input className="form-control" type="text" name="description" placeholder="Learn..." autoCapitalize="off" />
            <button className="btn btn-outline-primary mt-1">Add</button>
          </form>
        </div>

      </div>
    </div>
  )
}
