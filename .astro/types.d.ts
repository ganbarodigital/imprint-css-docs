declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
};

	};

	type DataEntryMap = {
		"colors": {
"ansi-safetyyellow": {
	id: "ansi-safetyyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-aluminium": {
	id: "apple-aluminium";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-aqua": {
	id: "apple-aqua";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-asparagus": {
	id: "apple-asparagus";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-banana": {
	id: "apple-banana";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-blueberry": {
	id: "apple-blueberry";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-bubblegum": {
	id: "apple-bubblegum";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-cantaloupe": {
	id: "apple-cantaloupe";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-carnation": {
	id: "apple-carnation";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-cayenne": {
	id: "apple-cayenne";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-clover": {
	id: "apple-clover";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-eggplant": {
	id: "apple-eggplant";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-fern": {
	id: "apple-fern";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-flora": {
	id: "apple-flora";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-grape": {
	id: "apple-grape";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-honeydew": {
	id: "apple-honeydew";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-ice": {
	id: "apple-ice";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-iron": {
	id: "apple-iron";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-lavender": {
	id: "apple-lavender";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-lead": {
	id: "apple-lead";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-lemon": {
	id: "apple-lemon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-licorice": {
	id: "apple-licorice";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-lime": {
	id: "apple-lime";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-magento": {
	id: "apple-magento";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-magnesium": {
	id: "apple-magnesium";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-maraschino": {
	id: "apple-maraschino";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-maroon": {
	id: "apple-maroon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-mercury": {
	id: "apple-mercury";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-midnight": {
	id: "apple-midnight";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-mocha": {
	id: "apple-mocha";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-moss": {
	id: "apple-moss";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-nickel": {
	id: "apple-nickel";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-ocean": {
	id: "apple-ocean";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-orchid": {
	id: "apple-orchid";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-plum": {
	id: "apple-plum";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-salmon": {
	id: "apple-salmon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-seafoam": {
	id: "apple-seafoam";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-silver": {
	id: "apple-silver";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-sky": {
	id: "apple-sky";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-snow": {
	id: "apple-snow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-spindrift": {
	id: "apple-spindrift";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-spring": {
	id: "apple-spring";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-steel": {
	id: "apple-steel";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-strawberry": {
	id: "apple-strawberry";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-tangerine": {
	id: "apple-tangerine";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-teal": {
	id: "apple-teal";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-tin": {
	id: "apple-tin";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-tungsten": {
	id: "apple-tungsten";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"apple-turquoise": {
	id: "apple-turquoise";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"baker-miller-pink": {
	id: "baker-miller-pink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"behr-caribbeancurrent": {
	id: "behr-caribbeancurrent";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"black": {
	id: "black";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"bsc-brunswickgreen": {
	id: "bsc-brunswickgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"calpolypomona-green": {
	id: "calpolypomona-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"castleton-green": {
	id: "castleton-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ciecd-amber": {
	id: "ciecd-amber";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"cmyk-cyan": {
	id: "cmyk-cyan";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"cmyk-pigmentblue": {
	id: "cmyk-pigmentblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"cmyk-pigmentgreen": {
	id: "cmyk-pigmentgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"cmyk-pigmentmagenta": {
	id: "cmyk-pigmentmagenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"cmyk-pigmentred": {
	id: "cmyk-pigmentred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"cmyk-processyellow": {
	id: "cmyk-processyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"cornell-red": {
	id: "cornell-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-alloyorange": {
	id: "crayola-alloyorange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-asparagus": {
	id: "crayola-asparagus";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-atomictangerine": {
	id: "crayola-atomictangerine";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-babypowder": {
	id: "crayola-babypowder";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-beaver": {
	id: "crayola-beaver";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-bittersweet": {
	id: "crayola-bittersweet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-bittersweetshimmer": {
	id: "crayola-bittersweetshimmer";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-blackleatherjacket": {
	id: "crayola-blackleatherjacket";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-blue": {
	id: "crayola-blue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-bluegray": {
	id: "crayola-bluegray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-bluegreen": {
	id: "crayola-bluegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-blush": {
	id: "crayola-blush";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-brinkpink": {
	id: "crayola-brinkpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-carnationpink": {
	id: "crayola-carnationpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-cottoncandy": {
	id: "crayola-cottoncandy";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-desertsand": {
	id: "crayola-desertsand";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-eerieblack": {
	id: "crayola-eerieblack";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-fern": {
	id: "crayola-fern";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-grape": {
	id: "crayola-grape";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-green": {
	id: "crayola-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-greenblue": {
	id: "crayola-greenblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-hotmagenta": {
	id: "crayola-hotmagenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-junglegreen": {
	id: "crayola-junglegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-lavender": {
	id: "crayola-lavender";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-lemon": {
	id: "crayola-lemon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-licorice": {
	id: "crayola-licorice";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-lightorange": {
	id: "crayola-lightorange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-magenta": {
	id: "crayola-magenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-maximumyellow": {
	id: "crayola-maximumyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-melon": {
	id: "crayola-melon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-mulberry": {
	id: "crayola-mulberry";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-noir": {
	id: "crayola-noir";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-orange": {
	id: "crayola-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-oynx": {
	id: "crayola-oynx";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-pearlypurple": {
	id: "crayola-pearlypurple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-piggypink": {
	id: "crayola-piggypink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-pinegreen": {
	id: "crayola-pinegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-plum": {
	id: "crayola-plum";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-purplepizzazz": {
	id: "crayola-purplepizzazz";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-razzledazzlerose": {
	id: "crayola-razzledazzlerose";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-red": {
	id: "crayola-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-robineggblue": {
	id: "crayola-robineggblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-royalpurple": {
	id: "crayola-royalpurple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-rustyred": {
	id: "crayola-rustyred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-salmonpink": {
	id: "crayola-salmonpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-screamingreen": {
	id: "crayola-screamingreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-shockingpink": {
	id: "crayola-shockingpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-skyblue": {
	id: "crayola-skyblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-smokeytopaz": {
	id: "crayola-smokeytopaz";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-steelpink": {
	id: "crayola-steelpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-ticklemepink": {
	id: "crayola-ticklemepink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-timberwolf": {
	id: "crayola-timberwolf";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-unmellowyellow": {
	id: "crayola-unmellowyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"crayola-yellow": {
	id: "crayola-yellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"dartmouth-green": {
	id: "dartmouth-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"egyptian-blue": {
	id: "egyptian-blue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"encycolorpedia-bottlegreen": {
	id: "encycolorpedia-bottlegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"encycolorpedia-celadon": {
	id: "encycolorpedia-celadon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"encycolorpedia-celadongreen": {
	id: "encycolorpedia-celadongreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"encycolorpedia-darkgreen": {
	id: "encycolorpedia-darkgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"encycolorpedia-darkmossgreen": {
	id: "encycolorpedia-darkmossgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"encycolorpedia-darkpastelgreen": {
	id: "encycolorpedia-darkpastelgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"encycolorpedia-teagreen": {
	id: "encycolorpedia-teagreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"encycolorpedia-verdigris": {
	id: "encycolorpedia-verdigris";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-alizarin": {
	id: "flat-alizarin";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-amethyst": {
	id: "flat-amethyst";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-asbestos": {
	id: "flat-asbestos";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-belizehole": {
	id: "flat-belizehole";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-carrot": {
	id: "flat-carrot";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-clouds": {
	id: "flat-clouds";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-concrete": {
	id: "flat-concrete";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-emerland": {
	id: "flat-emerland";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-greensea": {
	id: "flat-greensea";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-midnightblue": {
	id: "flat-midnightblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-nephritis": {
	id: "flat-nephritis";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-orange": {
	id: "flat-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-peterriver": {
	id: "flat-peterriver";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-pomegranate": {
	id: "flat-pomegranate";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-pumpkin": {
	id: "flat-pumpkin";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-silver": {
	id: "flat-silver";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-sunflower": {
	id: "flat-sunflower";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-turquoise": {
	id: "flat-turquoise";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-wetasphalt": {
	id: "flat-wetasphalt";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"flat-wisteria": {
	id: "flat-wisteria";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"french-pink": {
	id: "french-pink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-100": {
	id: "ganbaro-blue-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-200": {
	id: "ganbaro-blue-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-300": {
	id: "ganbaro-blue-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-400": {
	id: "ganbaro-blue-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-50": {
	id: "ganbaro-blue-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-500": {
	id: "ganbaro-blue-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-600": {
	id: "ganbaro-blue-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-700": {
	id: "ganbaro-blue-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-800": {
	id: "ganbaro-blue-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-900": {
	id: "ganbaro-blue-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-a100": {
	id: "ganbaro-blue-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-a200": {
	id: "ganbaro-blue-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-a400": {
	id: "ganbaro-blue-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-blue-a700": {
	id: "ganbaro-blue-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-100": {
	id: "ganbaro-green-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-200": {
	id: "ganbaro-green-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-300": {
	id: "ganbaro-green-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-400": {
	id: "ganbaro-green-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-50": {
	id: "ganbaro-green-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-500": {
	id: "ganbaro-green-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-600": {
	id: "ganbaro-green-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-700": {
	id: "ganbaro-green-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-800": {
	id: "ganbaro-green-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-900": {
	id: "ganbaro-green-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-a100": {
	id: "ganbaro-green-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-a200": {
	id: "ganbaro-green-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-a400": {
	id: "ganbaro-green-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-green-a700": {
	id: "ganbaro-green-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-0": {
	id: "ganbaro-mono-0";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-100": {
	id: "ganbaro-mono-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-200": {
	id: "ganbaro-mono-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-300": {
	id: "ganbaro-mono-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-400": {
	id: "ganbaro-mono-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-50": {
	id: "ganbaro-mono-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-500": {
	id: "ganbaro-mono-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-600": {
	id: "ganbaro-mono-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-700": {
	id: "ganbaro-mono-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-800": {
	id: "ganbaro-mono-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-mono-900": {
	id: "ganbaro-mono-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-100": {
	id: "ganbaro-orange-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-200": {
	id: "ganbaro-orange-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-300": {
	id: "ganbaro-orange-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-400": {
	id: "ganbaro-orange-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-50": {
	id: "ganbaro-orange-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-500": {
	id: "ganbaro-orange-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-600": {
	id: "ganbaro-orange-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-700": {
	id: "ganbaro-orange-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-800": {
	id: "ganbaro-orange-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-900": {
	id: "ganbaro-orange-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-a100": {
	id: "ganbaro-orange-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-a200": {
	id: "ganbaro-orange-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-a400": {
	id: "ganbaro-orange-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-orange-a700": {
	id: "ganbaro-orange-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-100": {
	id: "ganbaro-red-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-200": {
	id: "ganbaro-red-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-300": {
	id: "ganbaro-red-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-400": {
	id: "ganbaro-red-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-50": {
	id: "ganbaro-red-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-500": {
	id: "ganbaro-red-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-600": {
	id: "ganbaro-red-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-700": {
	id: "ganbaro-red-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-800": {
	id: "ganbaro-red-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-900": {
	id: "ganbaro-red-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-a100": {
	id: "ganbaro-red-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-a200": {
	id: "ganbaro-red-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-a400": {
	id: "ganbaro-red-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-red-a700": {
	id: "ganbaro-red-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-100": {
	id: "ganbaro-slate-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-200": {
	id: "ganbaro-slate-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-300": {
	id: "ganbaro-slate-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-400": {
	id: "ganbaro-slate-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-50": {
	id: "ganbaro-slate-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-500": {
	id: "ganbaro-slate-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-600": {
	id: "ganbaro-slate-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-700": {
	id: "ganbaro-slate-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-800": {
	id: "ganbaro-slate-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-900": {
	id: "ganbaro-slate-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-a100": {
	id: "ganbaro-slate-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-a200": {
	id: "ganbaro-slate-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-a400": {
	id: "ganbaro-slate-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-slate-a700": {
	id: "ganbaro-slate-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-100": {
	id: "ganbaro-tan-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-200": {
	id: "ganbaro-tan-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-300": {
	id: "ganbaro-tan-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-400": {
	id: "ganbaro-tan-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-50": {
	id: "ganbaro-tan-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-500": {
	id: "ganbaro-tan-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-600": {
	id: "ganbaro-tan-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-700": {
	id: "ganbaro-tan-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-800": {
	id: "ganbaro-tan-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-900": {
	id: "ganbaro-tan-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-a100": {
	id: "ganbaro-tan-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-a200": {
	id: "ganbaro-tan-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-a400": {
	id: "ganbaro-tan-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-tan-a700": {
	id: "ganbaro-tan-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-100": {
	id: "ganbaro-yellow-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-200": {
	id: "ganbaro-yellow-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-300": {
	id: "ganbaro-yellow-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-400": {
	id: "ganbaro-yellow-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-50": {
	id: "ganbaro-yellow-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-500": {
	id: "ganbaro-yellow-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-600": {
	id: "ganbaro-yellow-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-700": {
	id: "ganbaro-yellow-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-800": {
	id: "ganbaro-yellow-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-900": {
	id: "ganbaro-yellow-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-a100": {
	id: "ganbaro-yellow-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-a200": {
	id: "ganbaro-yellow-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-a400": {
	id: "ganbaro-yellow-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ganbaro-yellow-a700": {
	id: "ganbaro-yellow-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"go-green": {
	id: "go-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"hexcode-brightgreen": {
	id: "hexcode-brightgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-black": {
	id: "imprint-black";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-carbon": {
	id: "imprint-carbon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-darkblue": {
	id: "imprint-darkblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-darkgreen": {
	id: "imprint-darkgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-darkred": {
	id: "imprint-darkred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-darkyellow": {
	id: "imprint-darkyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-dimgray": {
	id: "imprint-dimgray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-graphite": {
	id: "imprint-graphite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-gray": {
	id: "imprint-gray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-lightblue": {
	id: "imprint-lightblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-lightgray": {
	id: "imprint-lightgray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-lightred": {
	id: "imprint-lightred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-nero": {
	id: "imprint-nero";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-paleblue": {
	id: "imprint-paleblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-palegray": {
	id: "imprint-palegray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-palegreen": {
	id: "imprint-palegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-palered": {
	id: "imprint-palered";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-paleyellow": {
	id: "imprint-paleyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-red": {
	id: "imprint-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"imprint-white": {
	id: "imprint-white";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"india-green": {
	id: "india-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-artichoke": {
	id: "iscc-nbs-artichoke";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-ashgrey": {
	id: "iscc-nbs-ashgrey";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-babypink": {
	id: "iscc-nbs-babypink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-battleshipgray": {
	id: "iscc-nbs-battleshipgray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-byzantium": {
	id: "iscc-nbs-byzantium";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-cadetgray": {
	id: "iscc-nbs-cadetgray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-cafenoir": {
	id: "iscc-nbs-cafenoir";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-cameopink": {
	id: "iscc-nbs-cameopink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-charcoal": {
	id: "iscc-nbs-charcoal";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-coolgray": {
	id: "iscc-nbs-coolgray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-coralpink": {
	id: "iscc-nbs-coralpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-darkpurple": {
	id: "iscc-nbs-darkpurple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-davysgrey": {
	id: "iscc-nbs-davysgrey";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-ecru": {
	id: "iscc-nbs-ecru";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-eggshell": {
	id: "iscc-nbs-eggshell";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-englishviolet": {
	id: "iscc-nbs-englishviolet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-glaucous": {
	id: "iscc-nbs-glaucous";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-graygreen": {
	id: "iscc-nbs-graygreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-huntergreen": {
	id: "iscc-nbs-huntergreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-independence": {
	id: "iscc-nbs-independence";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-jet": {
	id: "iscc-nbs-jet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-liberty": {
	id: "iscc-nbs-liberty";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-lust": {
	id: "iscc-nbs-lust";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-morningblue": {
	id: "iscc-nbs-morningblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-mossgreen": {
	id: "iscc-nbs-mossgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-myrtlegreen": {
	id: "iscc-nbs-myrtlegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-palepink": {
	id: "iscc-nbs-palepink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-pansypurple": {
	id: "iscc-nbs-pansypurple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-pastelpink": {
	id: "iscc-nbs-pastelpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-persiangreen": {
	id: "iscc-nbs-persiangreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-persianorange": {
	id: "iscc-nbs-persianorange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-pompandpower": {
	id: "iscc-nbs-pompandpower";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-purpureus": {
	id: "iscc-nbs-purpureus";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-raisinblack": {
	id: "iscc-nbs-raisinblack";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-rawumber": {
	id: "iscc-nbs-rawumber";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-rosequartz": {
	id: "iscc-nbs-rosequartz";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-royalyellow": {
	id: "iscc-nbs-royalyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-russet": {
	id: "iscc-nbs-russet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-russiangreen": {
	id: "iscc-nbs-russiangreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-russianviolet": {
	id: "iscc-nbs-russianviolet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-taupe": {
	id: "iscc-nbs-taupe";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-taupegray": {
	id: "iscc-nbs-taupegray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"iscc-nbs-vanilla": {
	id: "iscc-nbs-vanilla";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"islamic-green": {
	id: "islamic-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"jtc-kobicha": {
	id: "jtc-kobicha";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"jtc-violet": {
	id: "jtc-violet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ksu-purple": {
	id: "ksu-purple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"liquitex-quinacridonemagenta": {
	id: "liquitex-quinacridonemagenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-100": {
	id: "material-amber-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-200": {
	id: "material-amber-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-300": {
	id: "material-amber-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-400": {
	id: "material-amber-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-50": {
	id: "material-amber-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-500": {
	id: "material-amber-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-600": {
	id: "material-amber-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-700": {
	id: "material-amber-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-800": {
	id: "material-amber-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-900": {
	id: "material-amber-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-a100": {
	id: "material-amber-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-a200": {
	id: "material-amber-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-a400": {
	id: "material-amber-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-amber-a700": {
	id: "material-amber-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-100": {
	id: "material-blue-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-200": {
	id: "material-blue-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-300": {
	id: "material-blue-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-400": {
	id: "material-blue-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-50": {
	id: "material-blue-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-500": {
	id: "material-blue-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-600": {
	id: "material-blue-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-700": {
	id: "material-blue-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-800": {
	id: "material-blue-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-900": {
	id: "material-blue-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-a100": {
	id: "material-blue-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-a200": {
	id: "material-blue-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-a400": {
	id: "material-blue-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-blue-a700": {
	id: "material-blue-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-100": {
	id: "material-bluegray-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-200": {
	id: "material-bluegray-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-300": {
	id: "material-bluegray-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-400": {
	id: "material-bluegray-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-50": {
	id: "material-bluegray-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-500": {
	id: "material-bluegray-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-600": {
	id: "material-bluegray-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-700": {
	id: "material-bluegray-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-800": {
	id: "material-bluegray-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-bluegray-900": {
	id: "material-bluegray-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-100": {
	id: "material-brown-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-200": {
	id: "material-brown-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-300": {
	id: "material-brown-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-400": {
	id: "material-brown-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-50": {
	id: "material-brown-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-500": {
	id: "material-brown-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-600": {
	id: "material-brown-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-700": {
	id: "material-brown-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-800": {
	id: "material-brown-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-brown-900": {
	id: "material-brown-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-100": {
	id: "material-cyan-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-200": {
	id: "material-cyan-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-300": {
	id: "material-cyan-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-400": {
	id: "material-cyan-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-50": {
	id: "material-cyan-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-500": {
	id: "material-cyan-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-600": {
	id: "material-cyan-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-700": {
	id: "material-cyan-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-800": {
	id: "material-cyan-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-900": {
	id: "material-cyan-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-a100": {
	id: "material-cyan-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-a200": {
	id: "material-cyan-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-a400": {
	id: "material-cyan-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-cyan-a700": {
	id: "material-cyan-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-100": {
	id: "material-deeporange-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-200": {
	id: "material-deeporange-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-300": {
	id: "material-deeporange-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-400": {
	id: "material-deeporange-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-50": {
	id: "material-deeporange-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-500": {
	id: "material-deeporange-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-600": {
	id: "material-deeporange-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-700": {
	id: "material-deeporange-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-800": {
	id: "material-deeporange-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-900": {
	id: "material-deeporange-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-a100": {
	id: "material-deeporange-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-a200": {
	id: "material-deeporange-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-a400": {
	id: "material-deeporange-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeporange-a700": {
	id: "material-deeporange-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-100": {
	id: "material-deeppurple-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-200": {
	id: "material-deeppurple-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-300": {
	id: "material-deeppurple-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-400": {
	id: "material-deeppurple-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-50": {
	id: "material-deeppurple-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-500": {
	id: "material-deeppurple-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-600": {
	id: "material-deeppurple-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-700": {
	id: "material-deeppurple-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-800": {
	id: "material-deeppurple-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-900": {
	id: "material-deeppurple-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-a100": {
	id: "material-deeppurple-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-a200": {
	id: "material-deeppurple-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-a400": {
	id: "material-deeppurple-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-deeppurple-a700": {
	id: "material-deeppurple-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-100": {
	id: "material-gray-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-200": {
	id: "material-gray-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-300": {
	id: "material-gray-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-400": {
	id: "material-gray-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-50": {
	id: "material-gray-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-500": {
	id: "material-gray-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-600": {
	id: "material-gray-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-700": {
	id: "material-gray-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-800": {
	id: "material-gray-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-gray-900": {
	id: "material-gray-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-100": {
	id: "material-green-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-200": {
	id: "material-green-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-300": {
	id: "material-green-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-400": {
	id: "material-green-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-50": {
	id: "material-green-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-500": {
	id: "material-green-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-600": {
	id: "material-green-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-700": {
	id: "material-green-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-800": {
	id: "material-green-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-900": {
	id: "material-green-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-a100": {
	id: "material-green-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-a200": {
	id: "material-green-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-a400": {
	id: "material-green-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-green-a700": {
	id: "material-green-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-100": {
	id: "material-indigo-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-200": {
	id: "material-indigo-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-300": {
	id: "material-indigo-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-400": {
	id: "material-indigo-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-50": {
	id: "material-indigo-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-500": {
	id: "material-indigo-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-600": {
	id: "material-indigo-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-700": {
	id: "material-indigo-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-800": {
	id: "material-indigo-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-900": {
	id: "material-indigo-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-a100": {
	id: "material-indigo-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-a200": {
	id: "material-indigo-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-a400": {
	id: "material-indigo-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-indigo-a700": {
	id: "material-indigo-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-100": {
	id: "material-lightblue-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-200": {
	id: "material-lightblue-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-300": {
	id: "material-lightblue-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-400": {
	id: "material-lightblue-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-50": {
	id: "material-lightblue-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-500": {
	id: "material-lightblue-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-600": {
	id: "material-lightblue-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-700": {
	id: "material-lightblue-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-800": {
	id: "material-lightblue-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-900": {
	id: "material-lightblue-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-a100": {
	id: "material-lightblue-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-a200": {
	id: "material-lightblue-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-a400": {
	id: "material-lightblue-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightblue-a700": {
	id: "material-lightblue-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-100": {
	id: "material-lightgreen-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-200": {
	id: "material-lightgreen-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-300": {
	id: "material-lightgreen-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-400": {
	id: "material-lightgreen-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-50": {
	id: "material-lightgreen-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-500": {
	id: "material-lightgreen-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-600": {
	id: "material-lightgreen-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-700": {
	id: "material-lightgreen-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-800": {
	id: "material-lightgreen-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-900": {
	id: "material-lightgreen-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-a100": {
	id: "material-lightgreen-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-a200": {
	id: "material-lightgreen-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-a400": {
	id: "material-lightgreen-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lightgreen-a700": {
	id: "material-lightgreen-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-100": {
	id: "material-lime-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-200": {
	id: "material-lime-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-300": {
	id: "material-lime-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-400": {
	id: "material-lime-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-50": {
	id: "material-lime-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-500": {
	id: "material-lime-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-600": {
	id: "material-lime-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-700": {
	id: "material-lime-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-800": {
	id: "material-lime-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-900": {
	id: "material-lime-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-a100": {
	id: "material-lime-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-a200": {
	id: "material-lime-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-a400": {
	id: "material-lime-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-lime-a700": {
	id: "material-lime-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-100": {
	id: "material-orange-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-200": {
	id: "material-orange-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-300": {
	id: "material-orange-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-400": {
	id: "material-orange-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-50": {
	id: "material-orange-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-500": {
	id: "material-orange-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-600": {
	id: "material-orange-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-700": {
	id: "material-orange-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-800": {
	id: "material-orange-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-900": {
	id: "material-orange-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-a100": {
	id: "material-orange-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-a200": {
	id: "material-orange-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-a400": {
	id: "material-orange-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-orange-a700": {
	id: "material-orange-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-100": {
	id: "material-pink-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-200": {
	id: "material-pink-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-300": {
	id: "material-pink-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-400": {
	id: "material-pink-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-50": {
	id: "material-pink-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-500": {
	id: "material-pink-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-600": {
	id: "material-pink-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-700": {
	id: "material-pink-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-800": {
	id: "material-pink-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-900": {
	id: "material-pink-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-a100": {
	id: "material-pink-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-a200": {
	id: "material-pink-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-a400": {
	id: "material-pink-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-pink-a700": {
	id: "material-pink-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-100": {
	id: "material-purple-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-200": {
	id: "material-purple-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-300": {
	id: "material-purple-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-400": {
	id: "material-purple-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-50": {
	id: "material-purple-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-500": {
	id: "material-purple-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-600": {
	id: "material-purple-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-700": {
	id: "material-purple-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-800": {
	id: "material-purple-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-900": {
	id: "material-purple-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-a100": {
	id: "material-purple-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-a200": {
	id: "material-purple-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-a400": {
	id: "material-purple-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-purple-a700": {
	id: "material-purple-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-100": {
	id: "material-red-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-200": {
	id: "material-red-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-300": {
	id: "material-red-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-400": {
	id: "material-red-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-50": {
	id: "material-red-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-500": {
	id: "material-red-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-600": {
	id: "material-red-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-700": {
	id: "material-red-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-800": {
	id: "material-red-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-900": {
	id: "material-red-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-a100": {
	id: "material-red-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-a200": {
	id: "material-red-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-a400": {
	id: "material-red-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-red-a700": {
	id: "material-red-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-100": {
	id: "material-teal-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-200": {
	id: "material-teal-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-300": {
	id: "material-teal-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-400": {
	id: "material-teal-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-50": {
	id: "material-teal-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-500": {
	id: "material-teal-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-600": {
	id: "material-teal-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-700": {
	id: "material-teal-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-800": {
	id: "material-teal-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-900": {
	id: "material-teal-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-a100": {
	id: "material-teal-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-a200": {
	id: "material-teal-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-a400": {
	id: "material-teal-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-teal-a700": {
	id: "material-teal-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-100": {
	id: "material-yellow-100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-200": {
	id: "material-yellow-200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-300": {
	id: "material-yellow-300";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-400": {
	id: "material-yellow-400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-50": {
	id: "material-yellow-50";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-500": {
	id: "material-yellow-500";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-600": {
	id: "material-yellow-600";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-700": {
	id: "material-yellow-700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-800": {
	id: "material-yellow-800";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-900": {
	id: "material-yellow-900";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-a100": {
	id: "material-yellow-a100";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-a200": {
	id: "material-yellow-a200";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-a400": {
	id: "material-yellow-a400";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"material-yellow-a700": {
	id: "material-yellow-a700";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-amber": {
	id: "metro-amber";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-brown": {
	id: "metro-brown";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-cobalt": {
	id: "metro-cobalt";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-crimson": {
	id: "metro-crimson";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-cyan": {
	id: "metro-cyan";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-emerald": {
	id: "metro-emerald";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-green": {
	id: "metro-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-indigo": {
	id: "metro-indigo";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-lime": {
	id: "metro-lime";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-magenta": {
	id: "metro-magenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-mauve": {
	id: "metro-mauve";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-olive": {
	id: "metro-olive";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-orange": {
	id: "metro-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-pink": {
	id: "metro-pink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-red": {
	id: "metro-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-sienna": {
	id: "metro-sienna";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-steel": {
	id: "metro-steel";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-teal": {
	id: "metro-teal";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-violet": {
	id: "metro-violet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"metro-yellow": {
	id: "metro-yellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"milkpaint-barnred": {
	id: "milkpaint-barnred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-antiflashwhite": {
	id: "misc-antiflashwhite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-armygreen": {
	id: "misc-armygreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-bistre": {
	id: "misc-bistre";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-bone": {
	id: "misc-bone";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-brightmint": {
	id: "misc-brightmint";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-brightpink": {
	id: "misc-brightpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-brown": {
	id: "misc-brown";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-brunswickgreen": {
	id: "misc-brunswickgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-canaryyellow": {
	id: "misc-canaryyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-celeste": {
	id: "misc-celeste";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-cerulean": {
	id: "misc-cerulean";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-charlestongreen": {
	id: "misc-charlestongreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-chilired": {
	id: "misc-chilired";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-darkestmossgreen": {
	id: "misc-darkestmossgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-darkmossgreen": {
	id: "misc-darkmossgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-electricblue": {
	id: "misc-electricblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-electricviolet": {
	id: "misc-electricviolet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-feldgrau": {
	id: "misc-feldgrau";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-fern": {
	id: "misc-fern";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-fireenginered": {
	id: "misc-fireenginered";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-folly": {
	id: "misc-folly";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-giantsorange": {
	id: "misc-giantsorange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-graycard": {
	id: "misc-graycard";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-gunmetal": {
	id: "misc-gunmetal";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-hookersgreen": {
	id: "misc-hookersgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-isabelline": {
	id: "misc-isabelline";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-jade": {
	id: "misc-jade";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-kellygreen": {
	id: "misc-kellygreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-khaki": {
	id: "misc-khaki";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-labblue1": {
	id: "misc-labblue1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-labblue2": {
	id: "misc-labblue2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-labblue3": {
	id: "misc-labblue3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-labblue4": {
	id: "misc-labblue4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-labblue5": {
	id: "misc-labblue5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-labblue6": {
	id: "misc-labblue6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-lightmossgreen": {
	id: "misc-lightmossgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-magentadye": {
	id: "misc-magentadye";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-marengo": {
	id: "misc-marengo";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-mediumtaupe": {
	id: "misc-mediumtaupe";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-mexicanpink": {
	id: "misc-mexicanpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-midmossgreen": {
	id: "misc-midmossgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-midnightgreen": {
	id: "misc-midnightgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-mountbattenpink": {
	id: "misc-mountbattenpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-neongreen": {
	id: "misc-neongreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-nickel": {
	id: "misc-nickel";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-olivedrab7": {
	id: "misc-olivedrab7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-olivedrabcamouflage": {
	id: "misc-olivedrabcamouflage";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-olivine": {
	id: "misc-olivine";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-orange": {
	id: "misc-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-palatinate": {
	id: "misc-palatinate";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-paleyellow": {
	id: "misc-paleyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-parisgreen": {
	id: "misc-parisgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-paynegray": {
	id: "misc-paynegray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-phthalogreen": {
	id: "misc-phthalogreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-pillboxaqua": {
	id: "misc-pillboxaqua";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-pillboxblue": {
	id: "misc-pillboxblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-pillboxgreen": {
	id: "misc-pillboxgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-pillboxorange": {
	id: "misc-pillboxorange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-pillboxpink": {
	id: "misc-pillboxpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-pillboxpurple": {
	id: "misc-pillboxpurple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-pillboxyellow": {
	id: "misc-pillboxyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-purpleglove": {
	id: "misc-purpleglove";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-purpletaupe": {
	id: "misc-purpletaupe";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-scarlet": {
	id: "misc-scarlet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-shockingpink": {
	id: "misc-shockingpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-skymagenta": {
	id: "misc-skymagenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-splashedwhite": {
	id: "misc-splashedwhite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-turkeyred": {
	id: "misc-turkeyred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-ultramarine": {
	id: "misc-ultramarine";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-violet": {
	id: "misc-violet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"misc-vividviolet": {
	id: "misc-vividviolet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bilbao-1": {
	id: "msdl-bilbao-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bilbao-2": {
	id: "msdl-bilbao-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bilbao-3": {
	id: "msdl-bilbao-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bilbao-4": {
	id: "msdl-bilbao-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bilbao-5": {
	id: "msdl-bilbao-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bilbao-6": {
	id: "msdl-bilbao-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bilbao-7": {
	id: "msdl-bilbao-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-black": {
	id: "msdl-black";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-blue-1": {
	id: "msdl-blue-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-blue-2": {
	id: "msdl-blue-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-blue-3": {
	id: "msdl-blue-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-blue-4": {
	id: "msdl-blue-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-blue-5": {
	id: "msdl-blue-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-blue-6": {
	id: "msdl-blue-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-blue-7": {
	id: "msdl-blue-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bluelagoon-1": {
	id: "msdl-bluelagoon-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bluelagoon-2": {
	id: "msdl-bluelagoon-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bluelagoon-3": {
	id: "msdl-bluelagoon-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bluelagoon-4": {
	id: "msdl-bluelagoon-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bluelagoon-5": {
	id: "msdl-bluelagoon-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bluelagoon-6": {
	id: "msdl-bluelagoon-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-bluelagoon-7": {
	id: "msdl-bluelagoon-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-brown-1": {
	id: "msdl-brown-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-brown-2": {
	id: "msdl-brown-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-brown-3": {
	id: "msdl-brown-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-brown-4": {
	id: "msdl-brown-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-brown-5": {
	id: "msdl-brown-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-brown-6": {
	id: "msdl-brown-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-brown-7": {
	id: "msdl-brown-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christalle-1": {
	id: "msdl-christalle-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christalle-2": {
	id: "msdl-christalle-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christalle-3": {
	id: "msdl-christalle-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christalle-4": {
	id: "msdl-christalle-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christalle-5": {
	id: "msdl-christalle-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christalle-6": {
	id: "msdl-christalle-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christi-1": {
	id: "msdl-christi-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christi-2": {
	id: "msdl-christi-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christi-3": {
	id: "msdl-christi-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christi-4": {
	id: "msdl-christi-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christi-5": {
	id: "msdl-christi-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christi-6": {
	id: "msdl-christi-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-christi-7": {
	id: "msdl-christi-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-deepkoamaru-1": {
	id: "msdl-deepkoamaru-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-deepkoamaru-2": {
	id: "msdl-deepkoamaru-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-deepkoamaru-3": {
	id: "msdl-deepkoamaru-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-deepkoamaru-4": {
	id: "msdl-deepkoamaru-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-deepkoamaru-5": {
	id: "msdl-deepkoamaru-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-deepkoamaru-6": {
	id: "msdl-deepkoamaru-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-eggplant-1": {
	id: "msdl-eggplant-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-eggplant-2": {
	id: "msdl-eggplant-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-eggplant-3": {
	id: "msdl-eggplant-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-eggplant-4": {
	id: "msdl-eggplant-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-eggplant-5": {
	id: "msdl-eggplant-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-eggplant-6": {
	id: "msdl-eggplant-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-falured-1": {
	id: "msdl-falured-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-falured-2": {
	id: "msdl-falured-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-falured-3": {
	id: "msdl-falured-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-falured-4": {
	id: "msdl-falured-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-falured-5": {
	id: "msdl-falured-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-falured-6": {
	id: "msdl-falured-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-falured-7": {
	id: "msdl-falured-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-fungreen-1": {
	id: "msdl-fungreen-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-fungreen-2": {
	id: "msdl-fungreen-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-fungreen-3": {
	id: "msdl-fungreen-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-fungreen-4": {
	id: "msdl-fungreen-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-fungreen-5": {
	id: "msdl-fungreen-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-fungreen-6": {
	id: "msdl-fungreen-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-fungreen-7": {
	id: "msdl-fungreen-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gablegreen-1": {
	id: "msdl-gablegreen-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gablegreen-2": {
	id: "msdl-gablegreen-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gablegreen-3": {
	id: "msdl-gablegreen-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gablegreen-4": {
	id: "msdl-gablegreen-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gablegreen-5": {
	id: "msdl-gablegreen-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gablegreen-6": {
	id: "msdl-gablegreen-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gablegreen-7": {
	id: "msdl-gablegreen-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gray-1": {
	id: "msdl-gray-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gray-2": {
	id: "msdl-gray-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gray-3": {
	id: "msdl-gray-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gray-4": {
	id: "msdl-gray-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gray-5": {
	id: "msdl-gray-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gray-6": {
	id: "msdl-gray-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-gray-7": {
	id: "msdl-gray-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-green-1": {
	id: "msdl-green-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-green-2": {
	id: "msdl-green-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-green-3": {
	id: "msdl-green-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-green-4": {
	id: "msdl-green-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-green-5": {
	id: "msdl-green-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-green-6": {
	id: "msdl-green-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-green-7": {
	id: "msdl-green-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-indiantan-1": {
	id: "msdl-indiantan-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-indiantan-2": {
	id: "msdl-indiantan-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-indiantan-3": {
	id: "msdl-indiantan-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-indiantan-4": {
	id: "msdl-indiantan-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-indiantan-5": {
	id: "msdl-indiantan-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-indiantan-6": {
	id: "msdl-indiantan-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-indiantan-7": {
	id: "msdl-indiantan-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-midnightblue-1": {
	id: "msdl-midnightblue-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-midnightblue-2": {
	id: "msdl-midnightblue-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-midnightblue-3": {
	id: "msdl-midnightblue-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-midnightblue-4": {
	id: "msdl-midnightblue-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-midnightblue-5": {
	id: "msdl-midnightblue-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-midnightblue-6": {
	id: "msdl-midnightblue-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mirage-1": {
	id: "msdl-mirage-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mirage-2": {
	id: "msdl-mirage-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mirage-3": {
	id: "msdl-mirage-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mirage-4": {
	id: "msdl-mirage-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mirage-5": {
	id: "msdl-mirage-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mirage-6": {
	id: "msdl-mirage-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mirage-7": {
	id: "msdl-mirage-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mondo-1": {
	id: "msdl-mondo-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mondo-2": {
	id: "msdl-mondo-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mondo-3": {
	id: "msdl-mondo-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mondo-4": {
	id: "msdl-mondo-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mondo-5": {
	id: "msdl-mondo-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mondo-6": {
	id: "msdl-mondo-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mondo-7": {
	id: "msdl-mondo-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mosque-1": {
	id: "msdl-mosque-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mosque-2": {
	id: "msdl-mosque-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mosque-3": {
	id: "msdl-mosque-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mosque-4": {
	id: "msdl-mosque-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mosque-5": {
	id: "msdl-mosque-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mosque-6": {
	id: "msdl-mosque-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-mosque-7": {
	id: "msdl-mosque-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-palatinatepurple-1": {
	id: "msdl-palatinatepurple-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-palatinatepurple-2": {
	id: "msdl-palatinatepurple-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-palatinatepurple-3": {
	id: "msdl-palatinatepurple-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-palatinatepurple-4": {
	id: "msdl-palatinatepurple-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-palatinatepurple-5": {
	id: "msdl-palatinatepurple-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-palatinatepurple-6": {
	id: "msdl-palatinatepurple-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-prussianblue-1": {
	id: "msdl-prussianblue-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-prussianblue-2": {
	id: "msdl-prussianblue-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-prussianblue-3": {
	id: "msdl-prussianblue-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-prussianblue-4": {
	id: "msdl-prussianblue-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-prussianblue-5": {
	id: "msdl-prussianblue-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-prussianblue-6": {
	id: "msdl-prussianblue-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-prussianblue-7": {
	id: "msdl-prussianblue-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-rawumber-1": {
	id: "msdl-rawumber-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-rawumber-2": {
	id: "msdl-rawumber-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-rawumber-3": {
	id: "msdl-rawumber-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-rawumber-4": {
	id: "msdl-rawumber-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-rawumber-5": {
	id: "msdl-rawumber-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-rawumber-6": {
	id: "msdl-rawumber-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-rawumber-7": {
	id: "msdl-rawumber-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-red-1": {
	id: "msdl-red-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-red-2": {
	id: "msdl-red-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-red-3": {
	id: "msdl-red-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-red-4": {
	id: "msdl-red-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-red-5": {
	id: "msdl-red-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-red-6": {
	id: "msdl-red-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-red-7": {
	id: "msdl-red-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-redberry-1": {
	id: "msdl-redberry-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-redberry-2": {
	id: "msdl-redberry-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-redberry-3": {
	id: "msdl-redberry-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-redberry-4": {
	id: "msdl-redberry-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-redberry-5": {
	id: "msdl-redberry-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-redberry-6": {
	id: "msdl-redberry-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-redberry-7": {
	id: "msdl-redberry-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-saddlebrown-1": {
	id: "msdl-saddlebrown-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-saddlebrown-2": {
	id: "msdl-saddlebrown-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-saddlebrown-3": {
	id: "msdl-saddlebrown-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-saddlebrown-4": {
	id: "msdl-saddlebrown-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-saddlebrown-5": {
	id: "msdl-saddlebrown-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-saddlebrown-6": {
	id: "msdl-saddlebrown-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-saddlebrown-7": {
	id: "msdl-saddlebrown-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-sapphire-1": {
	id: "msdl-sapphire-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-sapphire-2": {
	id: "msdl-sapphire-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-sapphire-3": {
	id: "msdl-sapphire-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-sapphire-4": {
	id: "msdl-sapphire-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-sapphire-5": {
	id: "msdl-sapphire-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-sapphire-6": {
	id: "msdl-sapphire-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-sapphire-7": {
	id: "msdl-sapphire-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-scarletgum-1": {
	id: "msdl-scarletgum-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-scarletgum-2": {
	id: "msdl-scarletgum-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-scarletgum-3": {
	id: "msdl-scarletgum-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-scarletgum-4": {
	id: "msdl-scarletgum-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-scarletgum-5": {
	id: "msdl-scarletgum-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-scarletgum-6": {
	id: "msdl-scarletgum-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-teal-1": {
	id: "msdl-teal-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-teal-2": {
	id: "msdl-teal-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-teal-3": {
	id: "msdl-teal-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-teal-4": {
	id: "msdl-teal-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-teal-5": {
	id: "msdl-teal-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-teal-6": {
	id: "msdl-teal-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-teal-7": {
	id: "msdl-teal-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-tyrianpurple-1": {
	id: "msdl-tyrianpurple-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-tyrianpurple-2": {
	id: "msdl-tyrianpurple-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-tyrianpurple-3": {
	id: "msdl-tyrianpurple-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-tyrianpurple-4": {
	id: "msdl-tyrianpurple-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-tyrianpurple-5": {
	id: "msdl-tyrianpurple-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-tyrianpurple-6": {
	id: "msdl-tyrianpurple-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-white": {
	id: "msdl-white";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-windsor-1": {
	id: "msdl-windsor-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-windsor-2": {
	id: "msdl-windsor-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-windsor-3": {
	id: "msdl-windsor-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-windsor-4": {
	id: "msdl-windsor-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-windsor-5": {
	id: "msdl-windsor-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-windsor-6": {
	id: "msdl-windsor-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-yellow-1": {
	id: "msdl-yellow-1";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-yellow-2": {
	id: "msdl-yellow-2";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-yellow-3": {
	id: "msdl-yellow-3";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-yellow-4": {
	id: "msdl-yellow-4";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-yellow-5": {
	id: "msdl-yellow-5";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-yellow-6": {
	id: "msdl-yellow-6";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msdl-yellow-7": {
	id: "msdl-yellow-7";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"msu-green": {
	id: "msu-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"munsell-blue": {
	id: "munsell-blue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"munsell-green": {
	id: "munsell-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"munsell-purple": {
	id: "munsell-purple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"munsell-red": {
	id: "munsell-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"munsell-yellow": {
	id: "munsell-yellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ncs-blue": {
	id: "ncs-blue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ncs-green": {
	id: "ncs-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ncs-red": {
	id: "ncs-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ncs-yellow": {
	id: "ncs-yellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"northwestern-purple": {
	id: "northwestern-purple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ou-crimson": {
	id: "ou-crimson";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pakistan-green": {
	id: "pakistan-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-africanviolet": {
	id: "pantone-africanviolet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-artichoke": {
	id: "pantone-artichoke";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-barbiepink": {
	id: "pantone-barbiepink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-blue": {
	id: "pantone-blue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-champagnepink": {
	id: "pantone-champagnepink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-chineseviolet": {
	id: "pantone-chineseviolet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-fairytale": {
	id: "pantone-fairytale";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-fandangopink": {
	id: "pantone-fandangopink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-green": {
	id: "pantone-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-magenta": {
	id: "pantone-magenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-magentahaze": {
	id: "pantone-magentahaze";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-orange": {
	id: "pantone-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-orchidpink": {
	id: "pantone-orchidpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-paradisepink": {
	id: "pantone-paradisepink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-pink": {
	id: "pantone-pink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-pinklavender": {
	id: "pantone-pinklavender";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-red": {
	id: "pantone-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-redwood": {
	id: "pantone-redwood";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-riflegreen": {
	id: "pantone-riflegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-superpink": {
	id: "pantone-superpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pantone-yellow": {
	id: "pantone-yellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"plochere-charmpink": {
	id: "plochere-charmpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"plochere-chinapink": {
	id: "plochere-chinapink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"plochere-mellowyellow": {
	id: "plochere-mellowyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"plochere-mimipink": {
	id: "plochere-mimipink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"plochere-queenpink": {
	id: "plochere-queenpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"plochere-silverpink": {
	id: "plochere-silverpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"plochere-tangopink": {
	id: "plochere-tangopink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pourpre-avocado": {
	id: "pourpre-avocado";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pourpre-carmine": {
	id: "pourpre-carmine";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"pourpre-violet": {
	id: "pourpre-violet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"princeton-orange": {
	id: "princeton-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ral-blackolive": {
	id: "ral-blackolive";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ral-telemagenta": {
	id: "ral-telemagenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"resene-desire": {
	id: "resene-desire";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"resene-dutchwhite": {
	id: "resene-dutchwhite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"resene-rocketmetallic": {
	id: "resene-rocketmetallic";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"resene-spacecadet": {
	id: "resene-spacecadet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ridgeway-woodbrown": {
	id: "ridgeway-woodbrown";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"sacramentostate-green": {
	id: "sacramentostate-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"sharpie-aeroblue": {
	id: "sharpie-aeroblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-behance": {
	id: "social-behance";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-blogger": {
	id: "social-blogger";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-dribbble": {
	id: "social-dribbble";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-dropbox": {
	id: "social-dropbox";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-facebook": {
	id: "social-facebook";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-flickr": {
	id: "social-flickr";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-foursquare": {
	id: "social-foursquare";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-google-plus": {
	id: "social-google-plus";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-hackernews": {
	id: "social-hackernews";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-instagram": {
	id: "social-instagram";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-line": {
	id: "social-line";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-linkedin": {
	id: "social-linkedin";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-medium": {
	id: "social-medium";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-messenger": {
	id: "social-messenger";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-pinterest": {
	id: "social-pinterest";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-producthunt": {
	id: "social-producthunt";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-quora": {
	id: "social-quora";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-reddit": {
	id: "social-reddit";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-skype": {
	id: "social-skype";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-slack": {
	id: "social-slack";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-slideshare": {
	id: "social-slideshare";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-snapchat": {
	id: "social-snapchat";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-soundcloud": {
	id: "social-soundcloud";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-stumbleupon": {
	id: "social-stumbleupon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-tumblr": {
	id: "social-tumblr";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-twitter": {
	id: "social-twitter";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-vimeo": {
	id: "social-vimeo";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-vine": {
	id: "social-vine";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-vk": {
	id: "social-vk";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-wechat": {
	id: "social-wechat";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-weibo": {
	id: "social-weibo";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-whatsapp": {
	id: "social-whatsapp";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-wordpress": {
	id: "social-wordpress";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-yahoo": {
	id: "social-yahoo";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-yelp": {
	id: "social-yelp";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"social-youtube": {
	id: "social-youtube";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"spanish-blue": {
	id: "spanish-blue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"spanish-gray": {
	id: "spanish-gray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"spanish-green": {
	id: "spanish-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"spanish-orange": {
	id: "spanish-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"spanish-pink": {
	id: "spanish-pink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"spanish-red": {
	id: "spanish-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"spanish-violet": {
	id: "spanish-violet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"tiffany-blue": {
	id: "tiffany-blue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-amaranth": {
	id: "trad-amaranth";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-amaranthpink": {
	id: "trad-amaranthpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-apricot": {
	id: "trad-apricot";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-babyblue": {
	id: "trad-babyblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-buff": {
	id: "trad-buff";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-cardinalred": {
	id: "trad-cardinalred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-carrotorange": {
	id: "trad-carrotorange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-champagne": {
	id: "trad-champagne";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-cherryblossompink": {
	id: "trad-cherryblossompink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-chestnut": {
	id: "trad-chestnut";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-chocolate": {
	id: "trad-chocolate";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-cinereous": {
	id: "trad-cinereous";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-ebony": {
	id: "trad-ebony";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-emerald": {
	id: "trad-emerald";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-flax": {
	id: "trad-flax";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-harlequin": {
	id: "trad-harlequin";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-heliotrope": {
	id: "trad-heliotrope";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-laurelgreen": {
	id: "trad-laurelgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-lavender": {
	id: "trad-lavender";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-malachite": {
	id: "trad-malachite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-mauve": {
	id: "trad-mauve";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-orangepeel": {
	id: "trad-orangepeel";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-peach": {
	id: "trad-peach";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-periwinkle": {
	id: "trad-periwinkle";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-persianpink": {
	id: "trad-persianpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-persimmon": {
	id: "trad-persimmon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-phlox": {
	id: "trad-phlox";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-platinum": {
	id: "trad-platinum";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-pumpkin": {
	id: "trad-pumpkin";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-ruby": {
	id: "trad-ruby";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-shamrockgreen": {
	id: "trad-shamrockgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-vermilion": {
	id: "trad-vermilion";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"trad-viridian": {
	id: "trad-viridian";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"tyrian-purple": {
	id: "tyrian-purple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"up-forestgreen": {
	id: "up-forestgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"ut-orange": {
	id: "ut-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"uta-burntorange": {
	id: "uta-burntorange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-aliceblue": {
	id: "web-aliceblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-antiquewhite": {
	id: "web-antiquewhite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-aqua": {
	id: "web-aqua";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-aquamarine": {
	id: "web-aquamarine";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-azure": {
	id: "web-azure";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-beige": {
	id: "web-beige";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-bisque": {
	id: "web-bisque";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-black": {
	id: "web-black";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-blancedalmond": {
	id: "web-blancedalmond";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-blue": {
	id: "web-blue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-blueviolet": {
	id: "web-blueviolet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-brown": {
	id: "web-brown";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-burlywood": {
	id: "web-burlywood";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-cadetblue": {
	id: "web-cadetblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-chartreuse": {
	id: "web-chartreuse";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-chocolate": {
	id: "web-chocolate";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-coral": {
	id: "web-coral";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-cornflowerblue": {
	id: "web-cornflowerblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-cornsilk": {
	id: "web-cornsilk";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-crimson": {
	id: "web-crimson";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-cyan": {
	id: "web-cyan";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkblue": {
	id: "web-darkblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkcyan": {
	id: "web-darkcyan";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkgoldenrod": {
	id: "web-darkgoldenrod";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkgreen": {
	id: "web-darkgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkgrey": {
	id: "web-darkgrey";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkkhaki": {
	id: "web-darkkhaki";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkmagenta": {
	id: "web-darkmagenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkolivegreen": {
	id: "web-darkolivegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkorange": {
	id: "web-darkorange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkorchid": {
	id: "web-darkorchid";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkred": {
	id: "web-darkred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darksalmon": {
	id: "web-darksalmon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkseagreen": {
	id: "web-darkseagreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkslateblue": {
	id: "web-darkslateblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkslategrey": {
	id: "web-darkslategrey";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkturquoise": {
	id: "web-darkturquoise";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-darkviolet": {
	id: "web-darkviolet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-deeppink": {
	id: "web-deeppink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-deepskyblue": {
	id: "web-deepskyblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-dimgrey": {
	id: "web-dimgrey";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-dodgerblue": {
	id: "web-dodgerblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-firebrick": {
	id: "web-firebrick";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-floralwhite": {
	id: "web-floralwhite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-forestgreen": {
	id: "web-forestgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-fuchsia": {
	id: "web-fuchsia";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-gainsboro": {
	id: "web-gainsboro";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-ghostwhite": {
	id: "web-ghostwhite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-gold": {
	id: "web-gold";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-goldenrod": {
	id: "web-goldenrod";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-gray": {
	id: "web-gray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-green": {
	id: "web-green";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-greenyellow": {
	id: "web-greenyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-honeydew": {
	id: "web-honeydew";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-hotpink": {
	id: "web-hotpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-indianred": {
	id: "web-indianred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-indigo": {
	id: "web-indigo";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-ivory": {
	id: "web-ivory";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-khaki": {
	id: "web-khaki";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lavender": {
	id: "web-lavender";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lavenderblush": {
	id: "web-lavenderblush";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lawngreen": {
	id: "web-lawngreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lemonchiffon": {
	id: "web-lemonchiffon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightblue": {
	id: "web-lightblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightcoral": {
	id: "web-lightcoral";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightcyan": {
	id: "web-lightcyan";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightgoldenrodyellow": {
	id: "web-lightgoldenrodyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightgray": {
	id: "web-lightgray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightgreen": {
	id: "web-lightgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightpink": {
	id: "web-lightpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightsalmon": {
	id: "web-lightsalmon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightseagreen": {
	id: "web-lightseagreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightskyblue": {
	id: "web-lightskyblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightslategray": {
	id: "web-lightslategray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightsteelblue": {
	id: "web-lightsteelblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lightyellow": {
	id: "web-lightyellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-lime": {
	id: "web-lime";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-limegreen": {
	id: "web-limegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-linen": {
	id: "web-linen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-magenta": {
	id: "web-magenta";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-maroon": {
	id: "web-maroon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumaquamarine": {
	id: "web-mediumaquamarine";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumblue": {
	id: "web-mediumblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumorchid": {
	id: "web-mediumorchid";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumpurple": {
	id: "web-mediumpurple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumseagreen": {
	id: "web-mediumseagreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumslateblue": {
	id: "web-mediumslateblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumspringgreen": {
	id: "web-mediumspringgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumturquoise": {
	id: "web-mediumturquoise";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mediumvioletred": {
	id: "web-mediumvioletred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-midnightblue": {
	id: "web-midnightblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mintcream": {
	id: "web-mintcream";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-mistyrose": {
	id: "web-mistyrose";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-moccasin": {
	id: "web-moccasin";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-navajowhite": {
	id: "web-navajowhite";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-navy": {
	id: "web-navy";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-oldlace": {
	id: "web-oldlace";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-olive": {
	id: "web-olive";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-olivedrab": {
	id: "web-olivedrab";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-orange": {
	id: "web-orange";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-orangered": {
	id: "web-orangered";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-orchid": {
	id: "web-orchid";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-palegoldenrod": {
	id: "web-palegoldenrod";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-palegreen": {
	id: "web-palegreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-paleturquoise": {
	id: "web-paleturquoise";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-palevioletred": {
	id: "web-palevioletred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-papayawhip": {
	id: "web-papayawhip";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-peachpuff": {
	id: "web-peachpuff";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-peru": {
	id: "web-peru";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-pink": {
	id: "web-pink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-plum": {
	id: "web-plum";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-powderblue": {
	id: "web-powderblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-purple": {
	id: "web-purple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-rebeccapurple": {
	id: "web-rebeccapurple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-red": {
	id: "web-red";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-rosybrown": {
	id: "web-rosybrown";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-royalblue": {
	id: "web-royalblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-saddlebrown": {
	id: "web-saddlebrown";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-salmon": {
	id: "web-salmon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-sandybrown": {
	id: "web-sandybrown";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-seagreen": {
	id: "web-seagreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-seashell": {
	id: "web-seashell";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-sienna": {
	id: "web-sienna";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-silver": {
	id: "web-silver";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-skyblue": {
	id: "web-skyblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-slateblue": {
	id: "web-slateblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-slategray": {
	id: "web-slategray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-snow": {
	id: "web-snow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-springgreen": {
	id: "web-springgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-steelblue": {
	id: "web-steelblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-tan": {
	id: "web-tan";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-teal": {
	id: "web-teal";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-thistle": {
	id: "web-thistle";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-tomato": {
	id: "web-tomato";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-turquoise": {
	id: "web-turquoise";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-violet": {
	id: "web-violet";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-wheat": {
	id: "web-wheat";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-white": {
	id: "web-white";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-whitesmoke": {
	id: "web-whitesmoke";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-yellow": {
	id: "web-yellow";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"web-yellowgreen": {
	id: "web-yellowgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"white": {
	id: "white";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"x11-cream": {
	id: "x11-cream";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"x11-darkred": {
	id: "x11-darkred";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"x11-gray": {
	id: "x11-gray";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"x11-maroon": {
	id: "x11-maroon";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"x11-mintgreen": {
	id: "x11-mintgreen";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"x11-purple": {
	id: "x11-purple";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-blackbean": {
	id: "xona-blackbean";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-burntumber": {
	id: "xona-burntumber";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-deeppinklight": {
	id: "xona-deeppinklight";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-eminence": {
	id: "xona-eminence";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-keppel": {
	id: "xona-keppel";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-lighthotpink": {
	id: "xona-lighthotpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-mantis": {
	id: "xona-mantis";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-mardigras": {
	id: "xona-mardigras";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-newyorkpink": {
	id: "xona-newyorkpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-pinklace": {
	id: "xona-pinklace";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-resolutionblue": {
	id: "xona-resolutionblue";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
"xona-solidpink": {
	id: "xona-solidpink";
  collection: "colors";
  data: InferEntrySchema<"colors">
};
};
"components": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
