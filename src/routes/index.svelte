<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ page }) => {
    console.log("LOOKING FOR ICONS");

    return {
      status: 200,
    };
  };
</script>

<script lang="ts">
  import { searchIcons } from "../icons";

  let icons = searchIcons();

  const onChange = (query: string) => {
    icons = searchIcons(query);
  };
</script>

<main class="max-w-3xl mx-auto px-4 min-h-screen">
  <header class="mt-20 mb-8">
    <h1 class="text-5xl text-center font-bold text-blue-800 mb-4">devicons</h1>

    <input
      on:keyup={e => onChange(e.currentTarget.value)}
      class="px-3 py-3 w-full"
      placeholder="Search..."
      type="search"
    />
  </header>

  <section class="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 pb-4">
    {#each icons as icon}
      <a
        href="/i/{icon.file}"
        target="_blank"
        class="icon icon-${icon.name} flex items-center justify-center p-2 rounded transition-all border border-transparent hover:border-pink-500"
      >
        <img src="/i/{icon.file}" alt="{icon.name} Icon" class="max-h-[6rem]" />
      </a>
    {/each}
  </section>
</main>

<footer class="my-8 text-sm text-center">
  <a
    href="https://railway.app"
    class="text-gray-500 hover:text-pink-500 hover:underline"
    >Deployed on Railway</a
  >
</footer>
