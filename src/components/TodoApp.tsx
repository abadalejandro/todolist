import { useReducer, useEffect } from 'react';
import { ITodo, IAction } from '../interfaces/interfaces';
import { todoReducer } from '../reducer/todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './TodoApp.css';

const init = (): ITodo[] | [] => {
  const todos: any = localStorage.getItem('todos') || [];
  if (todos.length <= 0) {
    return [];
  } else {
    return JSON.parse(todos);
  }
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
    <div className="d-flex justify-content-center container pt-sm-2">
      <div id="container" className="w-75">

        <div className="row sticky-top bg-warning bg-gradient border border-1 p-2 rounded-2">

          <div className="col-12 col-sm-6 ">         
            <h1 className="text-left">
              TodoList
              <span className="badge bg-danger rounded-pill">{todos.length}</span>
            </h1>
          </div>

          <div className="col-12 col-sm-6 pt-2">
            <TodoAdd handleAddTodo={handleAddTodo} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  )
}
