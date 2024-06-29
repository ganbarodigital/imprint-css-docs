import { z, reference } from "astro:content";
import config from "../../imprint.config.js";

export const docsSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    navSection: z.enum(config.navSections),
    prev: reference('docs').optional(),
    next: reference('docs').optional(),
});
