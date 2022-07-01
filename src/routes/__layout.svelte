<script>
  import {supabase} from "../supabase.js";
  import "../app.css";
  import Nav from "../components/nav.svelte";
  console.log(supabase);
</script>

<main class="p-8 max-w-6xl mx-auto">
  <Nav></Nav>
  <slot />
</main>