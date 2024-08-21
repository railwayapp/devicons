<script lang="ts">
  import { searchIcons } from "../icons";

  let baseUrl = import.meta.env.VITE_BASE_URL;
  let icons = searchIcons();

  const onChange = (query: string) => {
    icons = searchIcons(query);
  };
</script>

<header class="mt-20 mb-8">
  <h1 class="text-5xl text-center font-bold text-blue-800 mb-4">devicons</h1>

  <h2 class="p-2 text-center mb-2 rounded-sm text-gray-500 leading-relaxed">
    <p class="">Search for an icon or go to</p>
    <a
      class="text-pink-500 font-mono text-sm hover:text-pink-500 hover:underline"
      href="{baseUrl}/rust"
    >
      {baseUrl}/&#x2774;query&#x2775;
    </a>
    <p>
      for an icon that best matches the query. <a
        href="/docs"
        class="text-pink-900 hover:underline">(Docs)</a
      >
    </p>
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
    {#each Object.keys(icon.variants) as variant}
      <a
        href="/i/{icon.variants[variant]}"
        target="_blank"
        class="{variant === 'light'
          ? 'bg-black'
          : ''} group relative flex items-center justify-center p-2 rounded transition-all"
      >
        <img
          src="/i/{icon.variants[variant]}"
          alt="{icon.name} {variant} Icon"
          class="max-h-[6rem]"
        />

        <div
          class="group-hover:opacity-100 opacity-0 transition-opacity absolute bg-gray-200 bg-opacity-95 flex flex-col items-center px-2 py-1 left-0 bottom-0 right-0"
        >
          <span class="text-sm font-medium">{icon.name}</span>
          <span class="text-[0.6rem]">{variant}</span>
        </div>
      </a>
    {/each}
  {/each}
</section>

<footer class="my-12 text-sm text-center">
  <a
    href="https://railway.app"
    class="text-gray-500 hover:text-pink-500 hover:underline"
    >Deployed on Railway</a
  >
</footer>
