import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": '#fff',
    '--my-black': '#1a1a',
    '--papafam-brand': '#f7ab0a',
    '--my-red': '#db4437',
    '--my-yellow': '#f4b400',
    '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
    // base theme colors
    '--black': props['--my-black'],
    '--white': props[]
})