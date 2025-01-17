<script>
  import { aStore, bStore, aActions, bActions, DispatcherDebug } from "$lib";
</script>

<button on:click={aActions.increment}>Increment A</button>
<button on:click={aActions.decrement}>Decrement A</button>

<button on:click={bActions.increment}>Increment B</button>
<button on:click={bActions.decrement}>Decrement B</button>
<button on:click={bActions.reset}>Reset B</button>

<button on:click={() => aActions.hydrate(10)}>Hydrate</button>

<p>Loaded: {aStore.loaded ? "Yes" : "No"}</p>

<p>A: {aStore.value}</p>
<p>B: {bStore.value}</p>

<p>A Double (derived): {aStore.double}</p>
<p>Mixed (derived a + b): {aStore.mixed}</p>

<DispatcherDebug />