// place files you want to import through the `$lib` alias in this folder.


export type { Action } from "./common/types";
export { dispatcher } from "./common/dispatcher.svelte";

export { aStore } from "./domains/a/stores/a.svelte";
export { aActions, AActionTypes } from "./domains/a/actions";

export { bStore } from "./domains/b/stores/b.svelte";
export { bActions, BActionTypes } from "./domains/b/actions";

export { default as DispatcherDebug } from "./common/DispatcherDebug.svelte";
