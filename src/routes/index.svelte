<script lang="ts">
  import { searchIcons } from "../icons";

  let baseUrl = "devicons-production.up.railway.app";
  let icons = searchIcons();

  const onChange = (query: string) => {
    icons = searchIcons(query);
  };
</script>

<header class="mt-20 mb-8">
  <h1 class="text-5xl text-center font-bold text-blue-800 mb-4">devicons</h1>

  <h2 class="p-2 text-center mb-2 rounded-sm">
    <div class="text-gray-500">Search for an icon or go to</div>
    <a
      class="font-mono text-sm hover:text-pink-500 hover:underline"
      href="http://{baseUrl}/rust"
    >
      {baseUrl}/&#x2774;query&#x2775;
    </a>
  </h2>

  <input
    on:keyup={e => onChange(e.currentTarget.value)}
    class="px-3 py-3 w-full"
    placeholder="Search..."
    type="search"
  />
</header>

<section
  class="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 pb-4 mb-16"
>
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

<footer class="my-12 text-sm text-center">
  <a
    href="https://railway.app"
    class="text-gray-500 hover:text-pink-500 hover:underline"
    >Deployed on Railway</a
  >
</footer>
