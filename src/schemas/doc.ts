import { z, reference } from "astro:content";
import config from "../../imprint.config.js";

const navSectionsNames: string[] = [];
config.navSections.forEach((navSection) => navSectionsNames.push(navSection.name));

export const docsSchema = z.object({
    title: z.string(),
    description: z.string(),
    navSection: z.enum(navSectionsNames as unknown as [string, ...string[]]),
    prev: reference('docs').optional(),
    next: reference('docs').optional(),
});
