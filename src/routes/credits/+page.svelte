<script lang="ts">
  import PageTitle from '$lib/components/page-title.svelte';

  let { data } = $props<{ data: ResolvedSiteCredits }>();
</script>

<PageTitle content="Credits" />

<article>
  {@html data.creditHtml}
</article>

<style lang="scss">
  @use 'src/app' as globals;
  article {
    padding: 0 globals.$main-spacing;
  }
</style>
