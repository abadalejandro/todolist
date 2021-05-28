import { ITodo } from '../interfaces/interfaces';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }:any) => {
    return (
        <ul className="list-group list-group-flush" >
            {
                todos.map((todo:ITodo, idx:number) => (
                   <TodoListItem key={todo.id} todo={todo} idx={idx} handleToggle={handleToggle} handleDelete={handleDelete} />
                ))
            }
        </ul>
    )
}


