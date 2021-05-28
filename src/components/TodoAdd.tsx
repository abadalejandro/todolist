import { useForm } from '../hooks/useForm';
import { ITodo } from '../interfaces/interfaces';

interface IProps {
    handleAddTodo: Function,
}

export const TodoAdd = ({ handleAddTodo }: IProps) => {
    const [{ description }, handleInputChange, reset] = useForm({ description: '' });

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        if (!description.trim()) return;

        const newTodo: ITodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Add Todo</h4>
            <hr />
            <form onSubmit={handleSubmit} className="d-grid gap-2">
                <input className="form-control" value={description} type="text" name="description" placeholder="Learn..." autoCapitalize="off" onChange={handleInputChange} />
                <button type="submit" className="btn btn-outline-primary mt-1" >Add</button>
            </form>
        </>
    )
}
