import type { Action } from '$lib';

type Subscriber = (action: Action) => void;

class Dispatcher {
    private subscribers = $state(new Set<Subscriber>());
    private lastAction = $state<Action | null>(null);
    private actionCount = $state(0);

    subscribe(subscriber: Subscriber) {
        this.subscribers.add(subscriber);
        return () => this.subscribers.delete(subscriber);
    }

    dispatch(action: Action) {
        this.lastAction = action;
        this.actionCount++;
        
        for (const subscriber of this.subscribers) {
            subscriber(action);
        }
    }

    get subscriberCount() {
        return this.subscribers.size;
    }

    get lastDispatchedAction() {
        return this.lastAction;
    }

    get totalActionsDispatched() {
        return this.actionCount;
    }
}

export const dispatcher = new Dispatcher(); 