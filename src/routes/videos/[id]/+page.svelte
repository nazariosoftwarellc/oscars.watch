<script lang="ts">
  import type { ResolvedVideoDetails } from '$lib/types/resolved-data';
  import YoutubeEmbed from '$lib/components/youtube-embed.svelte';

  let { data } = $props<{ data: ResolvedVideoDetails }>();

  const href = $derived(
    data.movieDetails ? `/movies/${data.movieDetails.id}` : ''
  );
</script>

<div>
  {#if data.movieDetails}
    <h2>From <em><a {href}>{data.movieDetails.title}</a></em></h2>
  {/if}
  <YoutubeEmbed videoId={data.youtubeVideoId} fullSize />
</div>

<style lang="scss">
  @use 'src/app' as globals;

  div {
    padding: 0 globals.$main-spacing;
    height: 100%;
  }
</style>
