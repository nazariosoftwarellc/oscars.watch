<script lang="ts">
  export let content: string;


</script>

<svelte:head>
  <title>{content} | Oscars.watch</title>
  <meta property="og:title" {content} />
  <meta property="twitter:title" {content} />
</svelte:head>
