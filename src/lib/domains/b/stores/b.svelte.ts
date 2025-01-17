import { dispatcher, type Action, BActionTypes } from '$lib';

class BStore {
    private state = $state(5);

    constructor() {
        dispatcher.subscribe(this.handleAction.bind(this));
    }

    private handleAction(action: Action) {
        switch (action.type) {
            case BActionTypes.INCREMENT:
                this.state++;
                break;
            case BActionTypes.DECREMENT:
                this.state--;
                break;
            case BActionTypes.RESET:
                this.state = 0;
                break;
        }
    }

    get value() {
        return this.state;
    }
}

export const bStore = new BStore(); 