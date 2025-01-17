<script>
  import { aStore, bStore, aActions, bActions, DispatcherDebug } from "$lib";
</script>

<h1>State Management with Svelte Runes, adapting some ideas from the Flux pattern</h1>

<a href="https://github.com/ucielsola/svelte-5-state-management">
  🧑🏼‍💻 Check the code...
</a>

<div class="buttons">
  <button on:click={aActions.increment}>Increment A</button>
  <button on:click={aActions.decrement}>Decrement A</button>

  <button on:click={bActions.increment}>Increment B</button>
  <button on:click={bActions.decrement}>Decrement B</button>
  <button on:click={bActions.reset}>Reset B</button>
  <button on:click={() => aActions.hydrate(10)}>Hydrate</button>
</div>


<p>Loaded: {aStore.loaded ? "Yes" : "No"}</p>

<p>A: {aStore.value}</p>
<p>B: {bStore.value}</p>

<p>A Double (derived): {aStore.double}</p>
<p>Mixed (derived a + b): {aStore.mixed}</p>

<DispatcherDebug />

<style>
  * {
    font-family: sans-serif;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    padding-block: 1rem;
  }

  a {
    font-size: 1.25rem;
  }
</style>
