import Fuse from "fuse.js";
import { orderBy } from "lodash-es";

export type Variants = Record<string, string>;

export interface Icon {
  name: string;
  variants: Variants;
  tags?: string[];
}

// const i = (name: string, args?: Partial<Omit<Icon, "name">>): Icon => ({
//   name,
//   file: `${name.toLowerCase()}.svg`,
//   ...args,
// });
const l = "light";
const d = "dark";
const c = "color";

const i = (name: string, variants: Variants, tags?: string[]): Icon => ({
  name,
  variants,
  tags,
});

export const icons: Icon[] = [
  i("NextJS", { [l]: "nextjs-light.svg", [d]: "nextjs-dark.svg" }),
  i("Android", { [c]: "android.svg" }),
  i("AngularJS", { [c]: "angularjs.svg" }),
  i("Apple", { [d]: "apple-dark.svg", [l]: "apple-light.svg" }),
  i("AWS", { [c]: "aws.svg" }),
  i("Babel", { [c]: "babel.svg" }),
  i("BackbonJS", { [c]: "backbonejs.svg" }),
  i("Bash", { [c]: "bash.svg" }),
  i("Bitbucket", { [c]: "bitbucket.svg" }),
  i("BlitzJS", { [c]: "blitzjs.svg" }),
  i("Bootstrap", { [c]: "bootstrap.svg" }),
  i("Bower", { [c]: "bower.svg" }),
  i("C", { [c]: "c.svg" }),
  i("Calendso", { [c]: "calendso.svg" }),
  i("Chrome", { [c]: "chrome.svg" }),
  i("Clojure", { [c]: "clojure.svg" }),
  i("ClojureScript", { [c]: "clojurescript.svg" }),
  i("CoffeeScript", { [c]: "coffeescript.svg" }),
  i("CouchDB", { [c]: "couchdb.svg" }),
  i("C++", { [c]: "cplusplus.svg" }),
  i("C#", { [c]: "csharp.svg" }),
  i("CSS3", { [c]: "css3.svg" }),
  i("Cucumber", { [c]: "cucumber.svg" }),
  i("D3", { [c]: "d3js.svg" }),
  i("Dark", { [c]: "dart.svg" }),
  i("Deno", { [c]: "deno.svg" }),
  i("Discord", { [c]: "discord.svg" }),
  i("Django", { [c]: "django.svg" }),
  i("Docker", { [c]: "docker.svg" }),
  i("DotNet", { [c]: "dot-net.svg" }),
  i("Drupal", { [c]: "drupal.svg" }),
  i("Electron", { [c]: "electron.svg" }),
  i("Eleventy", { [c]: "eleventy.svg" }),
  i("Elixir", { [c]: "elixir.svg" }),
  i("Elm", { [c]: "elm.svg" }),
  i("Erlang", { [c]: "erlang.svg" }),
  i("Fastify", { [d]: "fastify-dark.svg", [l]: "fastify-light.svg" }),
  i("Figma", { [c]: "figma.svg" }),
  i("Firebase", { [c]: "firebase.svg" }),
  i("Flask", { [d]: "flask-dark.svg", [l]: "flask-light.svg" }),
  i("Flutter", { [c]: "flutter.svg" }),
  i("F#", { [c]: "fsharp.svg" }),
  i("Gatsby", { [c]: "gatsby.svg" }),
  i("Ghost", { [c]: "ghost.svg" }),
  i("Git", { [c]: "git.svg" }),
  i("GitHub", { [d]: "github-dark.svg", [l]: "github-light.svg" }),
  i("GitLab", { [c]: "gitlab.svg" }),
  i("Go", { [c]: "go.svg" }, ["golang"]),
  i("Google", { [c]: "google.svg" }),
  i("GCP", { [c]: "googlecloud.svg" }),
  i("GraphQL", { [c]: "graphql.svg" }),
  i("Grunt", { [c]: "grunt.svg" }),
  i("Gulp", { [c]: "gulp.svg" }),
  i("Hapi", { [c]: "hapi.svg" }),
  i("Haskell", { [c]: "haskell.svg" }),
  i("Hasura", { [c]: "hasura.svg" }),
  i("Heroku", { [c]: "heroku.svg" }),
  i("HTML5", { [c]: "html5.svg" }),
  i("Java", { [c]: "java.svg" }),
  i("JavaScript", { [c]: "javascript.svg" }, ["expressjs"]),
  i("JQuery", { [c]: "jquery.svg" }),
  i("Jupyter", { [c]: "jupyter.svg" }),
  i("Kotlin", { [c]: "kotlin.svg" }),
  i("KrakenJS", { [c]: "krakenjs.svg" }),
  i("Kubernetes", { [c]: "kubernetes.svg" }),
  i("Laravel", { [c]: "laravel.svg" }),
  i("Lua", { [c]: "lua.svg" }),
  i("MaterialUI", { [c]: "materialui.svg" }),
  i("Matlab", { [c]: "matlab.svg" }),
  i("Meteor", { [c]: "meteor.svg" }),
  i("MinIO", { [c]: "minio.svg" }),
  i("MongoDB", { [c]: "mongodb.svg" }),
  i("MySQL", { [c]: "mysql.svg" }),
  i("NextJS", { [c]: "nestjs.svg" }),
  i("NocoDB", { [c]: "nocodb.png" }),
  i("NodeJS", { [c]: "nodejs.svg" }),
  i("NPM", { [c]: "npm.svg" }),
  i("OCaml", { [c]: "ocaml.svg" }),
  i("Phoenix", { [c]: "phoenix.svg" }),
  i("PHP", { [c]: "php.svg" }),
  i("PostgreSQL", { [c]: "postgresql.svg" }),
  i("Prisma", { [d]: "prisma-dark.svg", [l]: "prisma-light.svg" }),
  i("Python", { [c]: "python.svg" }),
  i("R", { [c]: "r.svg" }),
  i("Rails", { [c]: "rails.svg" }),
  i("Railway", { [d]: "railway-dark.svg", [l]: "railway-light.svg" }),
  i("React", { [c]: "react.svg" }),
  i("Redux", { [c]: "redux.svg" }),
  i("Redis", { [c]: "redis.svg" }),
  i("Rocket", { [c]: "rocket.png" }),
  i("Ruby", { [c]: "ruby.svg" }, ["sinatra"]),
  i("Rust", { [d]: "rust-dark.svg", [l]: "rust-light.svg" }),
  i("Safari", { [c]: "safari.svg" }),
  i("Sass", { [c]: "sass.svg" }),
  i("Scala", { [c]: "scala.svg" }),
  i("Shiori", { [c]: "shiori.png" }),
  i("Sketch", { [c]: "sketch.svg" }),
  i("Slack", { [c]: "slack.svg" }),
  i("Sourcetree", { [c]: "sourcetree.svg" }),
  i("Spring", { [c]: "spring.svg" }),
  i("Strapi", { [d]: "strapi.svg" }),
  i("SQLAlchemy", { [c]: "sqlalchemy.svg" }),
  i("Svelte", { [c]: "svelte.svg" }),
  i("Swift", { [c]: "swift.svg" }),
  i("Telegram", { [c]: "telegram.svg" }),
  i("Twitter", { [c]: "twitter.svg" }),
  i("TypeScript", { [c]: "typescript.svg" }),
  i("Ubuntu", { [c]: "ubuntu.svg" }),
  i("Umami", { [d]: "umami-dark.svg", [l]: "umami-light.svg" }),
  i("Vim", { [c]: "vim.svg" }),
  i("VueJS", { [c]: "vuejs.svg" }),
  i("Webpack", { [c]: "webpack.svg" }),
  i("Yarn", { [c]: "yarn.svg" }),
  i("Ackee", { [c]: "ackee.svg" }),
  i("VSCode", { [c]: "vscode.svg" }),
  i("WebAssembly", { [c]: "wasm.svg" }, ["wasm"]),
];

const fuse = new Fuse(icons, {
  includeScore: true,
  shouldSort: true,
  keys: ["name", "tags"],
});

export const searchIcons = (query?: string, log = true): Icon[] => {
  if (!query) {
    return icons;
  }

  // Find best result for each word of query
  const qs = query.split(/[\s*-]/);
  const results = qs
    .flatMap(w => fuse.search(w))
    .sort((a, b) => (a.score || 1.0) - (b.score || 1.0));

  if (log) {
    console.log(`\n\n--- ${qs}`);
    console.log(
      results
        .map(i => `${(i.score || 0).toFixed(3)}: ${i.item.name}`)
        .join("  \n"),
    );
  }

  return results.filter(i => (i.score || 1.0) < 0.35).map(r => r.item);
};

export const getVariant = (
  icon: Icon,
  variant?: string | null,
): string | null => {
  const v = icon.variants[variant || ""];

  // Always return something
  return v || icon.variants["dark"] || Object.values(icon.variants)[0];
};
