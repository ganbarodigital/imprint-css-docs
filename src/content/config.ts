// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const colorsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        hsl: z.object({
            h: z.number(),
            s: z.number(),
            l: z.number(),
        }),
        hex: z.string(),
        rgb: z.object({
            r: z.number(),
            g: z.number(),
            b: z.number(),
        }),
        rgbChannels: z.string(),
        isLight: z.boolean(),
        isDark: z.boolean(),
        lightModeContrast: z.number(),
        darkModeContrast: z.number(),
        luminosity: z.number(),
        shades: z.array(z.string()),
        group: z.string(),
    }),
});

const docsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        belongsTo: z.string(),
    }),
});

export const collections = {
    colors: colorsCollection,
    docs: docsCollection,
};