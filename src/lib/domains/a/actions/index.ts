import { dispatcher } from '$lib';

export const enum AActionTypes {
    INCREMENT = 'A/INCREMENT',
    DECREMENT = 'A/DECREMENT',
    HYDRATE = 'A/HYDRATE'
}

export const aActions = {
    increment: () => {
        dispatcher.dispatch({ type: AActionTypes.INCREMENT });
    },
    decrement: () => {
        dispatcher.dispatch({ type: AActionTypes.DECREMENT });
    },
    hydrate: (value: number) => {
        dispatcher.dispatch({ type: AActionTypes.HYDRATE, payload: value });
    }
}; 