<script>
  import "../app.css";
  import Nav from "../components/nav.svelte";
</script>

<main class="p-8 max-w-6xl mx-auto">
  <Nav></Nav>
  <slot />
</main>