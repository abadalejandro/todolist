import { useReducer, useEffect } from 'react';
import './TodoApp.css';
import { ITodo, IAction } from '../interfaces/interfaces';
import { todoReducer } from '../reducer/todoReducer';
import { useForm } from '../hooks/useForm';
import { TodoList } from './TodoList';


const init = (): ITodo[] | [] => {
  const todos: any = localStorage.getItem('todos') || [];

  return JSON.parse(todos) || [];

}

export const TodoApp = () => {
  // const inputRef = useRef('input');
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({ description: '' });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])


  console.log(description);


  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newTodo: ITodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action: IAction = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
    reset();
    // document.querySelector('input')?.select();

  }

  const handleDelete = (todoId: number) => {
    if (!todoId) return;

    const action: IAction = {
      type: 'delete',
      payload: todoId
    };

    dispatch(action);
  }

  const handleToggle = (todoId: number) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  }


  return (
    <div>
      <h1 className="text-left">TodoApp <span className="badge bg-danger rounded-pill">{todos.length}</span></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <form onSubmit={handleSubmit} className="d-grid gap-2">
            <input className="form-control" value={description} type="text" name="description" placeholder="Learn..." autoCapitalize="off" onChange={handleInputChange} />
            <button type="submit" className="btn btn-outline-primary mt-1">Add</button>
          </form>
        </div>

      </div>
    </div>
  )
}
