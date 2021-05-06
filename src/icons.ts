import FuzzySearch from "fuzzy-search";

export interface Icon {
  name: string;
  file: string;
  tags?: string[];
}

const i = (name: string, args?: Partial<Omit<Icon, "name">>): Icon => ({
  name,
  file: `${name.toLowerCase()}.svg`,
  ...args,
});

export const icons: Icon[] = [
  i("JavaScript", { tags: ["js"] }),
  i("TypeScript", { tags: ["javascript", "js", "ts"] }),
  i("Go"),
  i("Python", { tags: ["py"] }),
  i("Django"),
  i("Ruby"),
  i("Rust", { tags: ["cargo"] }),
  i("BlitzJS", { file: "blitzjs.png", tags: ["js", "javascript"] }),
  i("Deno", { file: "deno.png" }),
  i("Discord"),
  i("Elixir"),
  i("Flask"),
  i("Laravel", { tags: ["php"] }),
  i("NextJS", { tags: ["js", "javascript"] }),
  i("Prisma"),
  i("Rails", { tags: ["ruby"] }),
  i("Svelte"),
  i("Telegram"),
  i("Rocket", { file: "rocket.png" }),
];

const searcher = new FuzzySearch(icons, ["name", "file", "tags"], {
  caseSensitive: true,
  sort: true,
});

export const searchIcons = (query?: string): Icon[] => {
  if (!query) {
    return icons;
  }

  return searcher.search(query);
};
