<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import { getVariant, searchIcons } from "../icons";

  export const load: Load = async ({ page }) => {
    const variant = page.query.get("variant");
    const query = page.params.query;
    const noFallback = !!page.params.noFallback;

    const icon = searchIcons(query)[0];

    if (icon == null) {
      if (noFallback) {
        return { status: 404 };
      }

      // By default fallback to railway logo
      return {
        status: 302,
        redirect: "/i/railway.svg",
      };
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
