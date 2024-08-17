import natsort from "natsort";

export function buildSorter() {
    // this is needed to work around a bug in the vite package that Astro
    // uses to assemble all the JS code
    return natsort.default();
}