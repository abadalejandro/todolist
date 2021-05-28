import { useReducer, useEffect } from 'react';
import { ITodo, IAction } from '../interfaces/interfaces';
import { todoReducer } from '../reducer/todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './TodoApp.css';

const init = (): ITodo[] | [] => {
  const todos: any = localStorage.getItem('todos') || [];
  return JSON.parse(todos) || [];
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])


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

  const handleAddTodo = (newTodo: ITodo) => {
    const action: IAction = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
  }

  return (
    <div>
      <h1 className="text-left">TodoApp
        <span className="badge bg-danger rounded-pill">{todos.length}</span>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>

      </div>
    </div>
  )
}
