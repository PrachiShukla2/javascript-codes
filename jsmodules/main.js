// js modules that helps in organising outr code in reuseable file.

import playGuitar from "./item.js";
// this import syntax is for default functions
console.log(playGuitar());

import { shredding,plucking } from "./item.js";
console.log(shredding());
console.log(plucking());

// if we want to use two different function with same functions then we can import it by the following syntax
// this is called renaming of the functions
import { shredding as shred,plucking  as pluck} from "./item.js";
console.log(shred());
console.log(pluck());

// we can use another method to rename the default function

import * as Guitar from "./item.js";
console.log(Guitar.default());
console.log(Guitar.shredding());
console.log(Guitar.plucking());

