// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { docsSchema } from "../schemas/doc";
import { glob } from "astro/loaders";

const colors = defineCollection({
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

const CssStyles = defineCollection({
    type: 'data'
});

const devices = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        breakpoint: z.object({
            name: z.string(),
            mediaQuery: z.string(),
            screenWidth: z.string(),
            targetDevices: z.string(),
        }),
        remPx: z.string(),
        articleMaxWidth: z.string(),
    }),
});

const docs = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/docs"}),
    schema: docsSchema,
});

const CssVars = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        value: z.string(),
        type: z.enum(["color", "font-family", "size"]),
        description: z.string(),
        valueDescription: z.string(),
    }),
});

export const collections = { colors, devices, docs, CssStyles, CssVars };
