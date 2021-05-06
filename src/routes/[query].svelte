<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import { searchIcons } from "../icons";

  export const load: Load = async ({ page }) => {
    const query = page.params.query;

    const icon = searchIcons(query)[0];

    if (icon == null) {
      return {
        status: 404,
      };
    }

    const path = `/i/${icon.file}`;

    return {
      status: 302,
      redirect: path,
    };
  };
</script>

<div>Not Found</div>
