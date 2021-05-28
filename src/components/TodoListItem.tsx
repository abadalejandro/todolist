import { ITodo } from '../interfaces/interfaces';

interface IProps {
    todo:ITodo,
    idx:number,
    handleToggle:Function,
    handleDelete:Function,
}


export const TodoListItem = ({todo, idx, handleToggle, handleDelete}:IProps) => {
    return (
        <li key={todo.id} className="list-group-item">
            <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)} >{idx + 1} - {todo.desc}</p>
            <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
    )
}


