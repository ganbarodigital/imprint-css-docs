import { getCollection, getEntry } from 'astro:content';
import imprintConfig from "../../imprint.config";

type NavItems = string[];
interface DocItem {
    data: {
        title: string;
        description: string;
        navSection: string;
        prev?: {
            collection: "docs";
            id: string;
        } | undefined;
        next?: {
            collection: "docs";
            id: string;
        } | undefined;
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
    for (const navSection of imprintConfig.navSections) {
        // shorthand!
        const navSectionName = navSection.name;

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
        navItems.push(firstDoc.id);
        docList.set(firstDoc.id, firstDoc);

        // this will track our next doc
        let nextDoc = firstDoc;
        while(nextDoc.data.next !== undefined) {
            const nextContent = await getEntry("docs", nextDoc.data.next.id);
            if (nextContent === undefined) {
                throw new Error("cannot find docs entry " + nextDoc.data.next);
            }
            const nextSlug = nextContent.id;
            const maybeNextDoc = docs.find((doc) => doc.id === nextSlug);
            if (maybeNextDoc === undefined) {
                throw new Error("section " + navSectionName + ": cannot find " + nextSlug);
            }
            // at this point, we know that we have a good document!
            nextDoc = maybeNextDoc;
            navItems.push(nextDoc.id);
            docList.set(nextDoc.id, nextDoc);
        }

        // we just need to add this to the final list
        navList.set(navSectionName, navItems);
    }
};