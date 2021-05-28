import { useReducer, useEffect } from 'react';
import './TodoApp.css';
import { ITodo, IAction } from '../interfaces/interfaces';
import { todoReducer } from '../reducer/todoReducer';
import { useForm } from '../hooks/useForm';


const init = ():ITodo[]|[] => {
  const todos = localStorage.getItem('todos') || '';


  return  JSON.parse(todos) || null;

}

export const TodoApp = () => {
  // const inputRef = useRef('input');
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{description}, handleInputChange, reset] = useForm({description:''});
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    
  }, [todos])
  
  
  console.log(description);
  

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(!description.trim()) return;

    const newTodo: ITodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action:IAction = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
    reset();
    // document.querySelector('input')?.select();

  }

 


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
          <form onSubmit={handleSubmit} className="d-grid gap-2">
            <input className="form-control" value={description} type="text" name="description" placeholder="Learn..." autoCapitalize="off" onChange={handleInputChange}/>
            <button type="submit" className="btn btn-outline-primary mt-1">Add</button>
          </form>
        </div>

      </div>
    </div>
  )
}
