<script>
    import { dispatcher } from '$lib';
</script>

<div class="debug-panel">
    <h3>Dispatcher Debug</h3>
    <div class="stats">
        <p>Active Subscribers: {dispatcher.subscriberCount}</p>
        <p>Total Actions: {dispatcher.totalActionsDispatched}</p>
        {#if dispatcher.lastDispatchedAction}
            <div class="last-action">
                <p>Last Action: {dispatcher.lastDispatchedAction.type}</p>
                {#if dispatcher.lastDispatchedAction.payload !== undefined}
                    <p>Payload: {JSON.stringify(dispatcher.lastDispatchedAction.payload)}</p>
                {/if}
            </div>
        {/if}
    </div>
</div>

<style>
    .debug-panel {
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;
        background: #f5f5f5;
    }

    .stats {
        font-family: monospace;
    }

    .last-action {
        margin-top: 0.5rem;
        padding: 0.5rem;
        background: #e0e0e0;
        border-radius: 4px;
    }

    h3 {
        margin: 0 0 1rem 0;
    }

    p {
        margin: 0.25rem 0;
    }
</style> 