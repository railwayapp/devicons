<script lang="ts">
  import Index from "./index.svelte";

  let query = "";
</script>

<header class="mt-20 mb-8">
  <h1 class="text-5xl text-center font-bold text-blue-800 mb-4">devicons</h1>

  <h2 class="p-2 text-center mb-2 rounded-sm">
    <div class="text-gray-500">Search for an icon or go to</div>
  </h2>

  <input
    bind:value={query}
    class="px-3 py-3 w-full"
    placeholder="Search..."
    type="search"
  />
</header>

<div>
  {#if query !== ""}
    <img
      alt="Result for {query}"
      src="/{query}"
      class="max-h-[6rem] max-w-[6rem]"
    />
  {:else}
    <p>No results</p>
  {/if}
</div>
