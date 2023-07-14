import Fuse from "fuse.js";

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
  i("Android", { [c]: "android.svg" }),
  i("AngularJS", { [c]: "angularjs.svg" }),
  i("Apple", { [d]: "apple-dark.svg", [l]: "apple-light.svg" }),
  i("Arch Linux", { [c]: "archlinux.svg" }),
  i("Arduino", { [c]: "arduino.svg" }),
  i("Authorizer", { [c]: "authorizer.png" }),
  i("AWS", { [c]: "aws.svg" }),
  i("Azure", { [c]: "azure.svg" }),
  i("Babel", { [c]: "babel.svg" }),
  i("BackbonJS", { [c]: "backbonejs.svg" }),
  i("Bash", { [c]: "bash.svg" }),
  i("Beam", { [c]: "beam.svg" }),
  i("Bitbucket", { [c]: "bitbucket.svg" }),
  i("Blender", { [c]: "blender.svg" }),
  i("BlitzJS", { [c]: "blitzjs.svg" }),
  i("Bootstrap", { [c]: "bootstrap.svg" }),
  i("Bower", { [c]: "bower.svg" }),
  i("Browserless", { [c]: "browserless.png" }),
  i("Bun", { [c]: "bun.svg" }),
  i("C", { [c]: "c.svg" }),
  i("Calendso", { [c]: "calendso.svg" }),
  i("ChatGPT", { [c]: "chatgpt.svg" }),
  i("Chrome", { [c]: "chrome.svg" }),
  i("Circle-ci", { [c]: "circleci.svg" }),
  i("Clojure", { [c]: "clojure.svg" }),
  i("ClojureScript", { [c]: "clojurescript.svg" }),
  i("Cmake", { [c]: "cmake.svg" }),
  i("CoffeeScript", { [c]: "coffeescript.svg" }),
  i("Coder", { [d]: "coder-dark.png", [l]: "coder-light.png" }, [
    "vscode-server",
  ]),
  i("CouchDB", { [c]: "couchdb.svg" }),
  i("C++", { [c]: "cplusplus.png" }),
  i("C#", { [c]: "csharp.svg" }, ["csharp"]),
  i("CSS3", { [c]: "css3.svg" }),
  i("Cucumber", { [c]: "cucumber.svg" }),
  i("Cusdis", { [c]: "cusdis.png" }),
  i("D3", { [c]: "d3js.svg" }),
  i("Dart", { [c]: "dart.svg" }),
  i("Deno", { [c]: "deno.svg" }),
  i("Discord", { [c]: "discord.svg" }),
  i("Discord.py", { [c]: "discord-py.svg" }),
  i("Django", { [c]: "django.svg" }),
  i("Docker", { [c]: "docker.svg" }),
  i("DotNet", { [c]: "dot-net.svg" }),
  i("Drupal", { [c]: "drupal.svg" }),
  i("Edge", { [c]: "edge.svg" }),
  i("Electron", { [c]: "electron.svg" }),
  i("Eleventy", { [c]: "eleventy.svg" }),
  i("Elixir", { [c]: "elixir.svg" }),
  i("Elm", { [c]: "elm.svg" }),
  i("EndeavourOS", { [c]: "endeavouros.svg" }),
  i("Erlang", { [c]: "erlang.svg" }),
  i("Ethereum", { [c]: "ethereum.svg" }),
  i("FastAPI", { [c]: "fastapi.svg" }),
  i("Fastify", { [d]: "fastify-dark.svg", [l]: "fastify-light.svg" }),
  i("Fiber", { [c]: "fiber.svg" }),
  i("Fider", { [c]: "fider.svg" }),
  i("Figma", { [c]: "figma.svg" }),
  i("Firebase", { [c]: "firebase.svg" }),
  i("Firefox", { [c]: "firefox.svg" }),
  i("Flask", { [d]: "flask-dark.svg", [l]: "flask-light.svg" }),
  i("Flutter", { [c]: "flutter.svg" }),
  i("Fresh", { [c]: "fresh.svg" }),
  i("F#", { [c]: "fsharp.svg" }, ["fsharp"]),
  i("Gatsby", { [c]: "gatsby.svg" }),
  i("Ghost", { [c]: "ghost.svg" }),
  i("Git", { [c]: "git.svg" }),
  i("Gitpod", { [c]: "gitpod.svg" }, ["gitpod", "openvscode"]),
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
  i("Ktor", { [c]: "ktor.svg" }),
  i("Kubernetes", { [c]: "kubernetes.svg" }),
  i("Laravel", { [c]: "laravel.svg" }),
  i("Linux", { [c]: "tux.svg" }),
  i("Linux-mint", { [c]: "linux-mint.svg" }),
  i("Listmonk", { [c]: "listmonk.png" }),
  i("Livebook", { [c]: "livebook.svg" }),
  i("LogChimp", { [c]: "logchimp.svg" }),
  i("Lua", { [c]: "lua.svg" }),
  i("MaterialUI", { [c]: "materialui.svg" }),
  i("Matlab", { [c]: "matlab.svg" }),
  i("Meta", { [c]: "meta.svg" }),
  i("Metabase", { [c]: "metabase.svg" }),
  i("metamask", { [c]: "metamask.svg" }),
  i("Maildev", { [c]: "maildev.svg" }),
  i("Meteor", { [c]: "meteor.svg" }),
  i("MinIO", { [c]: "minio.svg" }),
  i("Monero", { [c]: "monero.svg" }),
  i("Mirotalk", { [c]: "mirotalk.svg" }),
  i("MongoDB", { [c]: "mongodb.svg" }),
  i("MySQL", { [c]: "mysql.svg" }),
  i("n8n", { [c]: "n8n.svg" }),
  i("NestJS", { [c]: "nestjs.svg" }),
  i("NextJS", { [l]: "nextjs-light.svg", [d]: "nextjs-dark.svg" }),
  i("NGINX", { [c]: "nginx.svg" }, ["static"]),
  i("NocoDB", { [c]: "nocodb.png" }),
  i("NodeJS", { [c]: "nodejs.svg" }),
  i("NPM", { [c]: "npm.svg" }),
  i("NuxtJS", {
    [c]: "nuxtjs.svg",
    [l]: "nuxtjs-light.svg",
    [d]: "nuxtjs-dark.svg",
  }),
  i("OCaml", { [c]: "ocaml.svg" }),
  i("OpenAI", { [c]: "openai.svg" }),
  i("Phoenix", { [c]: "phoenix.svg" }),
  i("PHP", { [c]: "php.svg" }),
  i("PostgreSQL", { [c]: "postgresql.svg" }),
  i("Postman", { [c]: "postman.svg" }),
  i("Puppeteer", { [c]: "puppeteer.svg" }),
  i("Prisma", { [d]: "prisma-dark.svg", [l]: "prisma-light.svg" }),
  i("Python", { [c]: "python.svg" }),
  i("Qovery", { [c]: "qovery.svg" }),
  i("Quirrel", { [c]: "quirrel.png" }),
  i("R", { [c]: "r.svg" }),
  i("Rails", { [c]: "rails.svg" }),
  i("Railway", { [d]: "railway-dark.svg", [l]: "railway-light.svg" }),
  i("React", { [c]: "react.svg" }),
  i("RedHat", { [l]: "redhat-light.svg", [d]: "redhat-dark.svg" }),
  i("Redux", { [c]: "redux.svg" }),
  i("Redis", { [c]: "redis.svg" }),
  i("Remix", { [c]: "remix.svg" }),
  i("Rocket", { [c]: "rocket.png" }),
  i("Ruby", { [c]: "ruby.svg" }, ["sinatra"]),
  i("Rust", { [d]: "rust-dark.svg", [l]: "rust-light.svg" }),
  i("Safari", { [c]: "safari.svg" }),
  i("Sass", { [c]: "sass.svg" }),
  i("Scala", { [c]: "scala.svg" }),
  i("Selenium", { [c]: "selenium.svg" }),
  i("Shiori", { [c]: "shiori.png" }),
  i("Sketch", { [c]: "sketch.svg" }),
  i("Slack", { [c]: "slack.svg" }),
  i("Soketi", { [c]: "soketi.png" }),
  i("Sourceforge", { [c]: "sourceforge.svg" }),
  i("Sourcetree", { [c]: "sourcetree.svg" }),
  i("Spring", { [c]: "spring.svg" }),
  i("Strapi", { [d]: "strapi.svg" }),
  i("SQLAlchemy", { [c]: "sqlalchemy.svg" }),
  i("Svelte", { [c]: "svelte.svg" }),
  i("Swift", { [c]: "swift.svg" }),
  i("Telegram", { [c]: "telegram.svg" }),
  i("Terraform", { [c]: "terraform.svg" }),
  i("Travis-ci", { [c]: "travis-ci.svg" }),
  i("tRPC", { [c]: "trpc.png" }),
  i("Twitter", { [c]: "twitter.svg" }),
  i("TypeScript", { [c]: "typescript.svg" }),
  i("Ubuntu", { [c]: "ubuntu.svg" }),
  i("Umami", { [d]: "umami-dark.svg", [l]: "umami-light.svg" }),
  i("Vim", { [c]: "vim.svg" }),
  i("ViteJS", { [c]: "vitejs.svg" }),
  i("Visual Studio Code", { [c]: "visual-studio-code.svg" }),
  i("VueJS", { [c]: "vuejs.svg" }),
  i("Web3js", { [c]: "web3js.png" }),
  i("Webpack", { [c]: "webpack.svg" }),
  i("Yarn", { [c]: "yarn.svg" }),
  i("Ackee", { [c]: "ackee.svg" }),
  i("Vaultwarden", {
    [d]: "vaultwarden-dark.svg",
    [l]: "vaultwarden-light.svg",
  }),
  i("Waline", { [c]: "waline.svg" }),
  i("WebAssembly", { [c]: "wasm.svg" }, ["wasm"]),
  i("Windows 7", { [c]: "w7.svg" }),
  i("Windows 10", { [c]: "windows10.svg" }),
  i("Windows 11", { [c]: "w11.svg" }),
  i("Windows Vista", { [c]: "Windows_Vista.svg" }),
  i("Xamarin", { [c]: "xamarin.svg" }),
  i("Zig", { [c]: "zig.svg" }),
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
