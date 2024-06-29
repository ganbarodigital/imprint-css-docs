import { getCollection } from 'astro:content';
import imprintConfig from "../../imprint.config";

type NavItems = string[];
type DocItem = {
    data: {
        [key: string]: string,
    }
}

export function getNavSection(navList: Map<string, NavItems>, sectionName: string) {
    const existingNavList = navList.get(sectionName);
    if (existingNavList) {
        return existingNavList;
    }

    // section does not exist, so create it and add it to the map
    const newNavItem: NavItems = [];
    navList.set(sectionName, newNavItem);
    return newNavItem;
}

// this will hold all of our nav sections, and the pages inside them
export const navList = new Map<string, NavItems>();

// this will hold all of our docs
export const docList = new Map<string, DocItem>();

export async function buildNavList(navList: Map<string, NavItems>, docList: Map<string, DocItem>) {
    for (const navSectionName of imprintConfig.navSections) {

        // this is the list that we are going to populate
        const navItems: NavItems = [];

        // this is all the docs that are in this section
        const docs = await getCollection('docs', ({data}) => data.navSection === navSectionName );

        // some robustness checks!
        if (docs.length === 0) {
            // nothing to see here
            navList.set(navSectionName, navItems);
            return;
        }
        const firstDocs = docs.filter((doc) => doc.data.prev === undefined);
        if (firstDocs.length > 1) {
            throw new Error("section " + navSectionName + " has " + firstDocs.length + " items with no 'prev' frontmatter defined");
        }
        const firstDoc = firstDocs[0];
        if (firstDoc === undefined) {
            throw new Error("section " + navSectionName + " has no item with 'prev' undefined");
        }

        const lastDocs = docs.filter((doc) => doc.data.next === undefined);
        if (lastDocs.length > 1) {
            throw new Error("section " + navSectionName + " has " + lastDocs.length + " items with no 'next' frontmatter defined");
        }
        const lastDoc = lastDocs[0];
        if (lastDoc === undefined) {
            throw new Error("section " + navSectionName + " has no item with 'next' undefined");
        }

        // we always want this
        navItems.push(firstDoc.slug);
        docList.set(firstDoc.slug, firstDoc);

        // this will track our next doc
        let nextDoc = firstDoc;
        while(nextDoc.data.next !== undefined) {
            const nextSlug = nextDoc.data.next.slug;
            nextDoc = docs.find((doc) => doc.slug === nextSlug);
            if (nextDoc === undefined) {
                throw new Error("section " + navSectionName + ": cannot find " + nextSlug);
            }
            navItems.push(nextDoc.slug);
            docList.set(nextDoc.slug, nextDoc);
        }

        // we just need to add this to the final list
        navList.set(navSectionName, navItems);
    }
};