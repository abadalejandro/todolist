import { ITodo } from '../interfaces/interfaces';

export const todoReducer = (state: ITodo[] = [], action: any) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                action.payload
            ];

        default:
            return state;
    }
}
