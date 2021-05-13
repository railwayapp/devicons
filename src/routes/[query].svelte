<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import { getVariant, searchIcons } from "../icons";

  export const load: Load = async ({ page }) => {
    const variant = page.query.get("variant");
    const query = page.params.query;
    const noFallback = !!page.params.noFallback;

    let icon = searchIcons(query)[0];

    if (icon == null) {
      if (noFallback) {
        return { status: 404 };
      }

      // By default fallback to railway logo
      icon = searchIcons("Railway", false)[0];
    }

    const file = getVariant(icon, variant);
    const path = `/i/${file}`;

    return {
      status: 302,
      redirect: path,
    };
  };
</script>

<div>Not Found</div>
