import { ITodo } from '../interfaces/interfaces';

export const todoReducer = (state: ITodo[] = [], action: any) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                action.payload
            ];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload)

        case 'done':
            return [{
                ...state,
                done: true
            } ];

        default:
            return state;
    }
}
