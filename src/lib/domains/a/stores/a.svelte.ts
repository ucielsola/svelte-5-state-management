import { dispatcher, type Action, bStore, AActionTypes } from '$lib';

class AStore {
    private state = $state({
        value: 0,
        loaded: false
    });

    double = $derived(this.state.value * 2);
    mixed = $derived(this.state.value + bStore.value);

    constructor() {
        dispatcher.subscribe(this.handleAction.bind(this));
    }

    private handleAction(action: Action) {
        switch (action.type) {
            case AActionTypes.INCREMENT:
                if (!this.state.loaded) return;
                this.state.value++;
                break;
            case AActionTypes.DECREMENT:
                if (!this.state.loaded) return;
                this.state.value--;
                break;
            case AActionTypes.HYDRATE:
                if (this.state.loaded) return;
                this.state.value = action.payload;
                this.state.loaded = true;
                break;
        }
    }

    get value() {
        return this.state.value;
    }

    get loaded() {
        return this.state.loaded;
    }
}

export const aStore = new AStore(); 