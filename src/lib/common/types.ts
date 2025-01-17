import type { AActionTypes, BActionTypes } from "$lib";

export interface Action {
    type: AActionTypes | BActionTypes;
    payload?: any;
} 