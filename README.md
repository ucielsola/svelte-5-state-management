# State Management Flow

## Key Features
- Centralized dispatcher
- Domain-specific stores
- Reactive state with Svelte runes
- Cross-store derived values
- Debug capabilities
- Is this format more readable?

## Structure
```
lib/
├── common/
│   ├── dispatcher.svelte.ts     # Central event dispatcher
│   ├── types.ts                 # Shared type definitions
│   └── DispatcherDebug.svelte   # Debug UI component
│
└── domains/
    ├── a/
    │   ├── actions/             # Domain A action creators
    │   └── stores/              # Domain A state management
    │
    └── b/
        ├── actions/             # Domain B action creators
        └── stores/              # Domain B state management
```

## Flow
UI → Action Creator → Dispatcher → Store → UI Update

## Components Interaction
1. UI Layer
   ```
   <button on:click={aActions.increment}>
   <p>Value: {aStore.value}</p>
   ```
2. Action Layer
   ```
   increment: () => dispatcher.dispatch({ type: 'A/INCREMENT' })
   ```
3. Store Layer
   ```
    class Store {
     private state = $state(...)
     double = $derived(...)
   }
   ```
