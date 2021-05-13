<script lang="ts">
  let query = "expressjs";
  let variant = "dark";

  $: href = `/${query}?variant=${variant}`;
</script>

<header class="mt-20 mb-8">
  <a href="/" class="cursor-pointer">
    <h1 class="text-5xl text-center font-bold text-blue-800 mb-4">
      devicons
    </h1></a
  >

  <h2 class="p-2 text-center mb-2 rounded-sm">
    <div class="text-gray-500">
      Shows what icon is found for the query and variant combination
    </div>
    <p>
      <a {href} class="font-mono text-sm text-pink-500" target="_blank">
        {href}
      </a>
    </p>
  </h2>

  <div class="flex items-center space-x-2">
    <div class="w-full flex-grow">
      <label for="query">Query</label>
      <input
        bind:value={query}
        name="query"
        placeholder="Search..."
        type="search"
      />
    </div>

    <div class="w-28">
      <label for="variant">Variant</label>
      <select bind:value={variant} name="variant">
        <option>dark</option>
        <option>light</option>
        <option>color</option></select
      >
    </div>
  </div>
</header>

<div>
  {#if query !== ""}
    <img
      alt="Result for {query}"
      src={href}
      class="{variant === 'light'
        ? 'bg-black p-2'
        : ''} max-h-[6rem] max-w-[6rem]"
    />
  {:else}
    <p>No results</p>
  {/if}
</div>
