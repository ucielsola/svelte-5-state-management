import { dispatcher } from '$lib';

export const enum BActionTypes {
    INCREMENT = 'B/INCREMENT',
    DECREMENT = 'B/DECREMENT',
    RESET = 'B/RESET'
}

export const bActions = {
    increment: () => {
        dispatcher.dispatch({ type: BActionTypes.INCREMENT });
    },
    decrement: () => {
        dispatcher.dispatch({ type: BActionTypes.DECREMENT });
    },
    reset: () => {
        dispatcher.dispatch({ type: BActionTypes.RESET });
    }
}; 